from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from ..utils.database import Base

class Network(Base):
    __tablename__ = "networks"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True)
    description = Column(String)
    topology_data = Column(String)  # JSON string representing the topology

    devices = relationship("Device", back_populates="network")

    @classmethod
    def create(cls, db, network_data):
        network = cls(**network_data)
        db.add(network)
        db.commit()
        db.refresh(network)
        return network

    @classmethod
    def get(cls, db, network_id):
        return db.query(cls).filter(cls.id == network_id).first()

    @classmethod
    def get_all(cls, db):
        return db.query(cls).all()
