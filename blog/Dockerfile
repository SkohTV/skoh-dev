FROM oven/bun:latest AS tailwind

COPY . /project
WORKDIR /project

RUN ["bun", "install", "tailwindcss", "@tailwindcss/cli"]
RUN ["bunx", "@tailwindcss/cli", "-i", "./static/css/style.css", "-o", "./static/css/tailwind.css"]


FROM ghcr.io/getzola/zola:v0.22.1 as zola

COPY . /project
COPY --from=tailwind /project/static/css/tailwind.css /project/static/css/tailwind.css 
WORKDIR /project

RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:2.41-debian
WORKDIR /
COPY --from=zola /project/public /public
