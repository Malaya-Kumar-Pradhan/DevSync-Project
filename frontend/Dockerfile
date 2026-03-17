FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
# The --host flag is critical. It exposes the Vite server to the Docker network 
# so your local browser can access it.
CMD ["npm", "run", "dev", "--", "--host"]