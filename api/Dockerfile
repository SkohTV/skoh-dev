FROM rust:1.78

WORKDIR /api
COPY . .

RUN cargo build --release

CMD ["/api/target/release/api"]
