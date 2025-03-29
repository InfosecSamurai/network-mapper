from typing import List
from ..schemas.device import DeviceCreate
from ..schemas.network import NetworkOut
from ..utils.topology_builder import build_network_topology

def build_topology(devices: List[DeviceCreate]) -> NetworkOut:
    """Build network topology from discovered devices"""
    topology = build_network_topology(devices)
    return NetworkOut(
        name="Discovered Network",
        description="Automatically discovered network topology",
        devices=devices,
        topology_data=topology
    )
