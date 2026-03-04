FROM ghcr.io/getzola/zola:v0.22.1 as zola

COPY . /project
WORKDIR /project
RUN ["zola", "build"]

FROM ghcr.io/static-web-server/static-web-server:2.41-debian
WORKDIR /
COPY --from=zola /project/public /public
