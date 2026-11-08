const { createHttpError } = require('../utils/http-error');

const DEFAULT_HANDWRITING_AI_BASE_URL = 'http://127.0.0.1:8001';
const MAX_IMAGE_BYTES = 4 * 1024 * 1024;
const REQUEST_TIMEOUT_MS = 30000;
const TEXT_TOP_K = 5;
const TEXT_MIN_CONFIDENCE = 0.35;
const TEXT_TTA = true;
const IMAGE_DATA_URL_PATTERN = /^data:(image\/(?:png|jpeg|jpg|webp));base64,(.+)$/;

function getHandwritingAiBaseUrl() {
  return process.env.HANDWRITING_AI_BASE_URL || DEFAULT_HANDWRITING_AI_BASE_URL;
}

function parseImageDataUrl(imageDataUrl) {
  if (typeof imageDataUrl !== 'string') {
    throw createHttpError(400, 'Vui lòng gửi ảnh chữ viết tay.');
  }

  const match = imageDataUrl.match(IMAGE_DATA_URL_PATTERN);
  if (!match) {
    throw createHttpError(400, 'Ảnh chữ viết tay không đúng định dạng.');
  }

  const mimeType = match[1] === 'image/jpg' ? 'image/jpeg' : match[1];
  const base64Data = match[2];
  const maxEncodedLength = Math.ceil(MAX_IMAGE_BYTES / 3) * 4;
  if (base64Data.length > maxEncodedLength) {
    throw createHttpError(400, 'Ảnh chữ viết tay quá lớn. Vui lòng dùng ảnh dưới 4MB.');
  }
  if (base64Data.length % 4 !== 0 || !/^[A-Za-z0-9+/]+={0,2}$/.test(base64Data)) {
    throw createHttpError(400, 'Ảnh chữ viết tay không đúng định dạng base64.');
  }
  const buffer = Buffer.from(base64Data, 'base64');

  if (buffer.length === 0) {
    throw createHttpError(400, 'Ảnh chữ viết tay đang trống.');
  }

  if (buffer.length > MAX_IMAGE_BYTES) {
    throw createHttpError(400, 'Ảnh chữ viết tay quá lớn. Vui lòng dùng ảnh dưới 4MB.');
  }

  return {
    buffer,
    mimeType,
  };
}

async function parseAiResponse(response) {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    try {
      return await response.json();
    } catch {
      throw createHttpError(502, 'Dịch vụ nhận diện trả về dữ liệu JSON không hợp lệ.');
    }
  }

  return {
    detail: await response.text(),
  };
}

async function requestHandwritingAi(path, image, queryParams) {
  const url = new URL(path, getHandwritingAiBaseUrl());

  for (const [key, value] of Object.entries(queryParams)) {
    url.searchParams.set(key, String(value));
  }

  const formData = new FormData();
  const imageBlob = new Blob([image.buffer], { type: image.mimeType });
  formData.append('file', imageBlob, 'handwriting.png');

  let response;

  try {
    response = await fetch(url, {
      method: 'POST',
      body: formData,
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
  } catch (error) {
    throw createHttpError(
      503,
      'Chưa kết nối được Japanese Handwriting AI. Vui lòng bật service AI ở port 8001.',
    );
  }

  const data = await parseAiResponse(response);

  // The bundled FastAPI service exposes a JSON endpoint; older model servers
  // expose multipart /predict/text. Fall back only when the endpoint is absent.
  if (response.status === 404) {
    const standardResponse = await fetch(new URL('/v1/recognize', getHandwritingAiBaseUrl()), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData: `data:${image.mimeType};base64,${image.buffer.toString('base64')}` }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    }).catch(() => {
      throw createHttpError(503, 'Chưa kết nối được dịch vụ nhận diện ảnh.');
    });
    const standardData = await parseAiResponse(standardResponse);
    if (!standardResponse.ok) {
      throw createHttpError(
        standardResponse.status === 503 ? 503 : 502,
        standardData?.error?.message || 'Dịch vụ nhận diện ảnh chưa sẵn sàng.',
      );
    }
    const candidates = standardData?.candidates;
    if (!Array.isArray(candidates) || candidates.some(candidate =>
      !candidate || typeof candidate.character !== 'string' ||
      !Number.isFinite(candidate.confidence) || candidate.confidence < 0 || candidate.confidence > 1)) {
      throw createHttpError(502, 'Dịch vụ nhận diện trả về kết quả không hợp lệ.');
    }
    const text = candidates[0]?.character || '';
    return {
      text,
      candidates: candidates.map(candidate => candidate.character),
      character_count: Array.from(text).length,
      average_confidence: candidates[0]?.confidence ?? null,
    };
  }

  if (!response.ok) {
    throw createHttpError(
      response.status === 503 ? 503 : 502,
      data?.detail || 'Japanese Handwriting AI không xử lý được ảnh này.',
    );
  }

  return data;
}

async function recognizeStrokesWithGoogle(strokes, width = 420, height = 420) {
  if (!Number.isFinite(width) || !Number.isFinite(height) ||
      width <= 0 || height <= 0 || width > 4096 || height > 4096 || strokes.length > 128) {
    throw createHttpError(400, 'Kích thước bảng hoặc số nét vẽ không hợp lệ.');
  }
  let totalPoints = 0;
  for (const stroke of strokes) {
    if (!stroke || !['x', 'y', 't'].every(key => Array.isArray(stroke[key])) ||
        stroke.x.length === 0 || stroke.x.length !== stroke.y.length ||
        stroke.x.length !== stroke.t.length ||
        !['x', 'y', 't'].every(key => stroke[key].every(Number.isFinite))) {
      throw createHttpError(400, 'Dữ liệu nét vẽ không hợp lệ.');
    }
    totalPoints += stroke.x.length;
  }
  if (totalPoints > 20000) throw createHttpError(400, 'Bản vẽ có quá nhiều điểm.');
  const ink = strokes.map((s) => [
    s.x || [],
    s.y || [],
    s.t || [],
  ]);

  let response;
  try {
    response = await fetch(
      'https://inputtools.google.com/request?ime=handwriting&app=mobilesearch&cs=1&oe=UTF-8',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          options: 'enable_pre_space',
          requests: [
            {
              writing_guide: {
                writing_area_width: width,
                writing_area_height: height,
              },
              ink,
              language: 'ja',
              max_results: 10,
            },
          ],
        }),
        signal: AbortSignal.timeout(10000),
      }
    );
  } catch (error) {
    throw createHttpError(502, 'Lỗi kết nối bộ nhận diện nét chữ đám mây.');
  }

  if (!response.ok) {
    throw createHttpError(502, 'Bộ nhận diện chữ viết không phản hồi thành công.');
  }

  const data = await parseAiResponse(response);
  const candidates = data?.[1]?.[0]?.[1];
  if (data?.[0] !== 'SUCCESS' || !Array.isArray(candidates) ||
      candidates.some(candidate => typeof candidate !== 'string')) {
    throw createHttpError(502, 'Bộ nhận diện chữ viết trả về kết quả không hợp lệ.');
  }
  if (candidates.length === 0) {
    return {
      text: '',
      candidates: [],
      character_count: 0,
      average_confidence: null,
    };
  }

  const bestMatch = candidates[0] || '';

  return {
    text: bestMatch,
    candidates: candidates.slice(0, 10),
    character_count: Array.from(bestMatch).length,
    // Input Tools returns candidates but does not provide calibrated confidence.
    average_confidence: null,
  };
}

async function getHandwritingHealth() {
  const url = new URL('/health', getHandwritingAiBaseUrl());

  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(2000),
    });
    const data = await parseAiResponse(response);

    if (response.ok && data.service === 'miraigo-handwriting-ai') {
      const readiness = await fetch(new URL('/ready', getHandwritingAiBaseUrl()), {
        signal: AbortSignal.timeout(2000),
      });
      const readinessData = await parseAiResponse(readiness);
      return { ...data, connected: true, engine: 'local', modelLoaded: readiness.ok && readinessData.model?.loaded === true };
    }

    return {
      ...data,
      connected: response.ok,
      engine: 'local',
    };
  } catch {
    return {
      connected: false,
      ok: false,
      modelLoaded: false,
      engine: 'cloud',
      message: 'AI local chưa kết nối. Nhận diện nét vẽ sẽ thử dịch vụ đám mây khi gửi.',
    };
  }
}

async function predictHandwriting(payload) {
  // If stroke coordinates from drawing canvas are provided, use high-accuracy handwriting recognition
  if (payload?.strokes && Array.isArray(payload.strokes) && payload.strokes.length > 0) {
    return recognizeStrokesWithGoogle(
      payload.strokes,
      payload.width === undefined ? 420 : Number(payload.width),
      payload.height === undefined ? 420 : Number(payload.height)
    );
  }

  // Fallback to local AI endpoint if image file was uploaded
  const image = parseImageDataUrl(payload?.imageDataUrl);

  try {
    return await requestHandwritingAi('/predict/text', image, {
      top_k: TEXT_TOP_K,
      tta: TEXT_TTA,
      min_confidence: TEXT_MIN_CONFIDENCE,
    });
  } catch (error) {
    if (error.status === 503) {
      throw createHttpError(
        503,
        'Model nhận diện ảnh chưa sẵn sàng. Bạn có thể vẽ trực tiếp lên bảng để nhận diện nét chữ.'
      );
    }
    throw error;
  }
}

module.exports = {
  getHandwritingHealth,
  predictHandwriting,
};
