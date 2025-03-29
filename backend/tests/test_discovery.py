import pytest
from app.services.discovery import discover_network
from app.schemas.network import NetworkCreate

def test_discover_network():
    # This would be a mock test in reality
    network = NetworkCreate(name="Test Network", description="Test")
    result = discover_network(network)
    assert isinstance(result, list)
