import nmap
from typing import List
from ..schemas.device import DeviceOut
from ..utils.network_scanner import scan_network

def discover_network(network: str) -> List[DeviceOut]:
    """Discover devices in the specified network range"""
    devices = scan_network(network)
    return [DeviceOut(**device) for device in devices]
