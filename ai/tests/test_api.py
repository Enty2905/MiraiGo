from fastapi.testclient import TestClient

from japanese_handwriting_ai.api import app

client = TestClient(app)


def test_health_returns_service_metadata() -> None:
    response = client.get("/health")

    assert response.status_code == 200
    assert response.json()["status"] == "ok"
    assert response.json()["service"] == "miraigo-handwriting-ai"


def test_readiness_reports_missing_model_adapter() -> None:
    response = client.get("/ready")

    assert response.status_code == 503
    assert response.json()["status"] == "not_ready"
    assert response.json()["model"]["loaded"] is False


def test_recognition_does_not_return_fake_predictions() -> None:
    response = client.post("/v1/recognize", json={"imageData": "data:image/png;base64,AA=="})

    assert response.status_code == 503
    assert response.json()["error"]["code"] == "MODEL_UNAVAILABLE"
