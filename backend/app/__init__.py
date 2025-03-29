from fastapi import FastAPI

app = FastAPI(
    title="Network Mapper API",
    description="API for network topology discovery and visualization",
    version="0.1.0"
)

from .main import *
from .models import *
from .services import *
