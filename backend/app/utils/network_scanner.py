import nmap
from typing import List, Dict

def scan_network(network_range: str) -> List[Dict]:
    """Scan a network range and return discovered devices"""
    nm = nmap.PortScanner()
    nm.scan(hosts=network_range, arguments='-sn')
    
    devices = []
    for host in nm.all_hosts():
        if nm[host].state() == 'up':
            device = {
                'ip_address': host,
                'mac_address': nm[host].get('addresses', {}).get('mac', 'Unknown'),
                'hostname': nm[host].hostname() or 'Unknown',
                'vendor': nm[host].get('vendor', {}).get(nm[host].get('addresses', {}).get('mac', ''), 'Unknown'),
                'device_type': 'unknown'  # This would be determined by additional scanning
            }
            devices.append(device)
    
    return devices
