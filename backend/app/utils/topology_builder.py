import json
from typing import List, Dict
from ..schemas.device import DeviceCreate

def build_network_topology(devices: List[DeviceCreate]) -> str:
    """Build a network topology graph from discovered devices"""
    nodes = []
    links = []
    
    # Create nodes
    for device in devices:
        nodes.append({
            'id': device.ip_address,
            'name': device.hostname,
            'type': device.device_type,
            'mac': device.mac_address,
            'vendor': device.vendor
        })
    
    # Simple heuristic to create links (in a real app, this would use more sophisticated discovery)
    if len(nodes) > 1:
        # Assume first device is a router/switch and connect everything to it
        central_node = nodes[0]['id']
        for node in nodes[1:]:
            links.append({
                'source': central_node,
                'target': node['id'],
                'type': 'connection'
            })
    
    topology = {
        'nodes': nodes,
        'links': links
    }
    
    return json.dumps(topology)
