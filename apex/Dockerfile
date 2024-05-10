# Base image
FROM golang:1.22

# Set working directory
WORKDIR /apex

# Copy application code
COPY . .
RUN go build -v -o _output/bin

# Expose port and run the application
EXPOSE 5000
CMD ["_output/bin"]
