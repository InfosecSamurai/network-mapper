from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from ..utils.database import Base

class Device(Base):
    __tablename__ = "devices"

    id = Column(Integer, primary_key=True, index=True)
    ip_address = Column(String, unique=True, index=True)
    mac_address = Column(String, unique=True)
    hostname = Column(String)
    vendor = Column(String)
    device_type = Column(String)  # router, switch, server, etc.
    network_id = Column(Integer, ForeignKey("networks.id"))

    network = relationship("Network", back_populates="devices")

    @classmethod
    def create(cls, db, device_data):
        device = cls(**device_data)
        db.add(device)
        db.commit()
        db.refresh(device)
        return device

    @classmethod
    def get(cls, db, device_id):
        return db.query(cls).filter(cls.id == device_id).first()
