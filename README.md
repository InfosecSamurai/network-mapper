# 🌐 Network Mapper

A visual tool for discovering and mapping network topologies using Python (backend) and React (frontend).

## 🚀 Features

- **Network Discovery**: Scan IP ranges to detect devices
- **Topology Visualization**: Interactive network maps with device relationships
- **Device Profiling**: View IP/MAC addresses, hostnames, and vendors
- **Persistence**: Save/load network configurations

## 🛠️ Tech Stack

| Component       | Technology               |
|----------------|--------------------------|
| Frontend       | React.js, D3.js          |
| Backend        | Python (FastAPI, nmap)   |
| Database       | PostgreSQL               |
| Deployment     | Docker, GitHub Actions   |

## 📦 Installation (GitHub)

### Prerequisites
- GitHub account
- Basic understanding of Git

### Setup
1. **Clone the repository**:
   ```bash
   git clone https://github.com/InfosecSamurai/network-mapper.git
   ```
2. **No local install needed** - The project is ready for cloud deployment!

## 🌍 Deployment Options

### Option A: GitHub Pages (Frontend Only)
1. Go to `Settings > Pages`
2. Set source to `main` branch and `/(root)`
3. Wait for deployment (may take 2-3 minutes)

### Option B: Full Stack with Vercel/Netlify
1. Import the repository to your Vercel/Netlify account
2. Configure environment variables:
   ```
   REACT_APP_API_URL=https://your-backend.vercel.app
   ```
3. Deploy!

## 🧑‍💻 Development (Optional)

If you want to run locally later:

```bash
# Backend
cd backend
python3 -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate    # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload

# Frontend
cd frontend
npm install
npm start
```

## 📚 API Documentation

Access the interactive docs when running locally:
```
http://localhost:8000/docs
```

Endpoints:
- `POST /discover/` - Scan network range
- `POST /topology/` - Save topology
- `GET /networks/` - List saved networks

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## ✉️ Contact

William Shaw - InfosecSamurai@onmail.com  
Project Link: [https://github.com/InfosecSamurai/network-mapper](https://github.com/InfosecSamurai/network-mapper)
