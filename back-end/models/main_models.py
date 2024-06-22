#!/user/bin/python3

from models.base_model import BaseModel, Base
from sqlalchemy import Column, String, DateTime, Date, Integer, Enum, Float, Index, ForeignKey, Boolean
from sqlalchemy.orm import relationship


class DocumentNumber(Base):
    __tablename__ = 'document_numbers'

    last_number = Column(Integer, default=0, primary_key=True)


class User(BaseModel, Base):
    """Defines the User class"""
    __tablename__ = "users"

    username = Column(String(100), nullable=False)
    password = Column(String(500), nullable=False)
    role = Column(Enum('admin', 'customer'), nullable=False)

    # Relationships
    


    def __init__(self, **kwargs):
        """Initializes a User instance
        """
        super().__init__(**kwargs)

    # User methods

    