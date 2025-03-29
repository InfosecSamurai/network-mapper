import pytest
from app.services.mapper import build_topology
from app.schemas.device import DeviceCreate

def test_build_topology():
    devices = [
        DeviceCreate(
            ip_address="192.168.1.1",
            mac_address="00:11:22:33:44:55",
            hostname="router1",
            vendor="Cisco",
            device_type="router",
            network_id=1
        ),
        DeviceCreate(
            ip_address="192.168.1.2",
            mac_address="00:11:22:33:44:56",
            hostname="server1",
            vendor="Dell",
            device_type="server",
            network_id=1
        )
    ]
    result = build_topology(devices)
    assert result.name == "Discovered Network"
    assert len(result.devices) == 2
