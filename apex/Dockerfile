# FROM golang:1.22 as builder
#
# WORKDIR /apex
#
# COPY . .
# RUN go build -v -o apex
#
#
#
# FROM debian:buster-slim
# RUN mkdir /apex
# COPY --from=builder /apex/bin /apex/bin
#
# EXPOSE 5000


FROM golang:1.22

WORKDIR /apex

COPY go.mod ./ 
# No external dependancies, so no go.sum
# COPY go.sum ./ 
# RUN go mod download

COPY main.go ./
COPY static/ ./

RUN CGO_ENABLED=0 GOOS=linux go build -v -o /apex/bin

EXPOSE 5000
CMD ["/apex/bin"]
