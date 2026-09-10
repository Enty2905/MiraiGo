from pathlib import Path


class ModelUnavailableError(RuntimeError):
    """Raised when inference is requested before a model adapter is ready."""


class HandwritingRecognizer:
    def __init__(self, model_path: Path | None, min_confidence: float) -> None:
        self.model_path = model_path
        self.min_confidence = min_confidence
        self.loaded = False

    @property
    def configured(self) -> bool:
        return self.model_path is not None

    @property
    def model_exists(self) -> bool:
        return self.model_path is not None and self.model_path.is_file()

    def recognize(self, _image_data: str) -> list[dict[str, str | float]]:
        raise ModelUnavailableError(
            "The handwriting model adapter has not been configured for this base project"
        )
