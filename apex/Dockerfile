# Base distro
FROM oven/bun:latest as base


# Fetch deps stage
FROM base as deps

WORKDIR /apex
COPY package.json bun.lockb /apex/

RUN bun install --frozen-lockfile


# Build stage
FROM base as builder

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /apex
COPY --from=deps /apex/node_modules node_modules
COPY . .

RUN bun run build


# Release stage
FROM base as release

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /apex
COPY --from=builder /apex/.next/standalone ./
COPY --from=builder /apex/.next/static ./.next/static

EXPOSE 5000
ENV PORT 5000
ENTRYPOINT ["bun", "/apex/server.js"]
