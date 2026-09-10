from pydantic import BaseModel, ConfigDict, Field


class RecognitionRequest(BaseModel):
    model_config = ConfigDict(populate_by_name=True)

    image_data: str = Field(
        alias="imageData",
        min_length=1,
        description="PNG, JPEG, or WebP data URL supplied by the backend.",
    )


class RecognitionCandidate(BaseModel):
    character: str
    confidence: float = Field(ge=0, le=1)


class RecognitionResponse(BaseModel):
    candidates: list[RecognitionCandidate]
