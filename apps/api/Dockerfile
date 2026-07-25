FROM node:22-bookworm-slim

WORKDIR /app

RUN npm install -g pnpm@9.0.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/api ./apps/api
COPY packages ./packages

RUN pnpm install

RUN pnpm --filter @repo/db build

RUN pnpm run build


EXPOSE 5000

WORKDIR /app/apps/api

CMD ["pnpm", "run", "start"]