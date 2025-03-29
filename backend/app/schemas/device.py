from pydantic import BaseModel

class DeviceCreate(BaseModel):
    ip_address: str
    mac_address: str
    hostname: str
    vendor: str
    device_type: str
    network_id: int

class DeviceOut(DeviceCreate):
    id: int

    class Config:
        orm_mode = True
