# Base image
FROM python:3.12-slim

# Set working directory
WORKDIR /apex

# Install Flask
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy application code
COPY main.py .
COPY static/ static/

# Expose port and run the application
EXPOSE 5000
CMD ["python", "main.py"]
