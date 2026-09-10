from fastapi import FastAPI, Request, status
from fastapi.responses import JSONResponse

from . import __version__
from .config import get_settings
from .recognizer import HandwritingRecognizer, ModelUnavailableError
from .schemas import RecognitionRequest, RecognitionResponse

settings = get_settings()
recognizer = HandwritingRecognizer(settings.model_path, settings.min_confidence)

app = FastAPI(
    title="MiraiGo Handwriting AI",
    version=__version__,
    description="Internal inference boundary. No checkpoint is bundled with the base project.",
)


@app.exception_handler(ModelUnavailableError)
async def model_unavailable_handler(
    _request: Request, error: ModelUnavailableError
) -> JSONResponse:
    return JSONResponse(
        status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
        content={
            "error": {
                "code": "MODEL_UNAVAILABLE",
                "message": str(error),
            }
        },
    )


@app.get("/health", tags=["system"])
async def health() -> dict[str, str]:
    return {
        "status": "ok",
        "service": "miraigo-handwriting-ai",
        "version": __version__,
    }


@app.get("/ready", tags=["system"])
async def readiness() -> JSONResponse:
    is_ready = recognizer.loaded
    return JSONResponse(
        status_code=status.HTTP_200_OK if is_ready else status.HTTP_503_SERVICE_UNAVAILABLE,
        content={
            "status": "ready" if is_ready else "not_ready",
            "model": {
                "configured": recognizer.configured,
                "pathExists": recognizer.model_exists,
                "loaded": recognizer.loaded,
            },
        },
    )


@app.post(
    "/v1/recognize",
    response_model=RecognitionResponse,
    responses={503: {"description": "No verified model adapter is available"}},
    tags=["recognition"],
)
async def recognize(payload: RecognitionRequest) -> RecognitionResponse:
    candidates = recognizer.recognize(payload.image_data)
    return RecognitionResponse(candidates=candidates)
