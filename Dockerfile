FROM node:22-alpine

WORKDIR /app
ENV PORT=2567

COPY package*.json ./
RUN npm ci --include=dev

COPY . .

ARG VITE_PONG_WS_URL=
ENV VITE_PONG_WS_URL=${VITE_PONG_WS_URL}
RUN npm run build
RUN npm prune --omit=dev

ENV NODE_ENV=production
EXPOSE 2567
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 CMD node -e "fetch('http://127.0.0.1:' + (process.env.PORT || 2567) + '/health').then((response) => process.exit(response.ok ? 0 : 1)).catch(() => process.exit(1))"
CMD ["npm", "run", "start:server"]
