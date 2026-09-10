import os
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path


def _read_float(name: str, fallback: float) -> float:
    raw_value = os.getenv(name)
    if not raw_value:
        return fallback

    value = float(raw_value)
    if not 0 <= value <= 1:
        raise ValueError(f"{name} must be between 0 and 1")
    return value


@dataclass(frozen=True, slots=True)
class Settings:
    model_path: Path | None
    min_confidence: float


@lru_cache
def get_settings() -> Settings:
    raw_model_path = os.getenv("JAPANESE_HANDWRITING_MODEL_PATH", "").strip()
    return Settings(
        model_path=Path(raw_model_path) if raw_model_path else None,
        min_confidence=_read_float("MIN_CONFIDENCE", 0.35),
    )
