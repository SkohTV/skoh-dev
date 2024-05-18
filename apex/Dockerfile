# Build stage
FROM golang:1.22 AS builder

WORKDIR /apex
COPY . .

RUN go mod download
RUN go build -v -o /apex/bin


# Release stage
FROM debian:12-slim as release

WORKDIR /apex
COPY --from=builder /apex/bin /apex/bin
COPY --from=builder /apex/static/ /apex/static

EXPOSE 5000
ENTRYPOINT ["/apex/bin"]
