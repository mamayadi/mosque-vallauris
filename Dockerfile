FROM node:22-alpine

WORKDIR /app

# Install dependencies first (layer cache)
COPY package*.json ./
RUN npm install

# Copy source (dev mode uses volume mount, so this is mainly for build)
COPY . .

EXPOSE 4321

CMD ["npm", "run", "dev"]
