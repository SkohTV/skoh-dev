# Build stage
FROM rust:1.78 as builder

WORKDIR /api
COPY . .

RUN cargo build --release -v



# Release stage
FROM debian:12-slim as release

WORKDIR /apex
COPY --from=builder /api/target/release/api /api/bin

EXPOSE 5002
ENTRYPOINT ["/api/bin"]
