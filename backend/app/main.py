from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .models.device import Device
from .models.network import Network
from .services.discovery import discover_network
from .services.mapper import build_topology
from .schemas.device import DeviceCreate, DeviceOut
from .schemas.network import NetworkCreate, NetworkOut
from typing import List

app = FastAPI()

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/discover/", response_model=List[DeviceOut])
async def discover_devices(network: NetworkCreate):
    """Discover devices in the specified network"""
    return discover_network(network)

@app.post("/topology/", response_model=NetworkOut)
async def create_topology(devices: List[DeviceCreate]):
    """Build network topology from discovered devices"""
    return build_topology(devices)

@app.get("/networks/", response_model=List[NetworkOut])
async def get_networks():
    """Get all saved networks"""
    return Network.get_all()

@app.get("/networks/{network_id}", response_model=NetworkOut)
async def get_network(network_id: int):
    """Get a specific network by ID"""
    network = Network.get(network_id)
    if not network:
        raise HTTPException(status_code=404, detail="Network not found")
    return network
