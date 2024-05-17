FROM golang:1.22 as builder

WORKDIR /apex
COPY . .

# RUN go mod download
RUN go build -v -o bin



FROM alpine:latest

COPY --from=builder /apex/bin /apex/bin
COPY --from=builder /apex/static/ /apex/static

EXPOSE 5000
CMD ["/apex/bin"]
