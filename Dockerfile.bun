FROM oven/bun

WORKDIR /app

COPY package.json /app/package.json
COPY bun.lockb /app/bun.lock

RUN bun install

COPY . /app

RUN bun run build

EXPOSE 3000

CMD ["bun", "./build/index.js"]