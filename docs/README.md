# Network Mapper

A visual tool for mapping and understanding network topologies.

## Features

- Network discovery using nmap
- Visual representation of network topology
- Device information display
- Save and load network configurations

## Installation

### Prerequisites

- Python 3.7+
- Node.js 14+
- PostgreSQL (for production)
- nmap (for network scanning)

### Development Setup

1. Clone the repository
2. Set up backend:
   ```bash
   cd backend
   pip install -r requirements.txt
   uvicorn app.main:app --reload
