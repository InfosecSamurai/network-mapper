from pydantic import BaseModel
from typing import List
from .device import DeviceOut

class NetworkCreate(BaseModel):
    name: str
    description: str

class NetworkOut(NetworkCreate):
    id: int
    devices: List[DeviceOut]
    topology_data: str

    class Config:
        orm_mode = True
