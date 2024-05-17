FROM rust:1.78 as builder

WORKDIR /api
COPY . .

RUN cargo build --release -v



FROM alpine:latest

COPY --from=builder /api/target/release/api /api/bin

EXPOSE 5002
CMD ["/api/bin"]
