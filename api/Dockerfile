FROM rust:1.78 as builder

WORKDIR /api
COPY . .

RUN cargo build --release



FROM debian:buster-slim

COPY --from=builder /api/target/release/api /api/bin

EXPOSE 5002
CMD ["/api/bin"]
