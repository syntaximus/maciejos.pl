FROM arm64v8/node:20.1.0-alpine3.16 AS builder
ENV NODE_ENV production
ENV DISABLE_ESLINT_PLUGIN true
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

# Bundle static assets with nginx
FROM arm64v8/nginx:1.23.4-alpine as production
ENV NODE_ENV production
# Copy built assets from `builder` image
COPY --from=builder /app/build /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]