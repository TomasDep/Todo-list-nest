# Install dependencies only when needed
FROM node:18-alpine3.15 AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Build the app with cache dependencies
FROM node:18-alpine3.15 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build

# Production image, copy all the files and run next
FROM node:18-alpine3.15 AS runner

# Set working directory
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --prod

COPY --from=builder /app/dist ./dist

# COPY directory and content
# RUN mkdir -p ./todo-list

# COPY --from=builder ./app/dist/ ./app
# COPY ./.env ./app/.env

# Give permission to run the application
# RUN adduser --disabled-password superuser
# RUN chown -R superuser:superuser ./todo-list
# USER superuser

# EXPOSE 3000

CMD [ "node","dist/main" ]