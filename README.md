<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Order & Payment Microservices

This project consists of two microservices: `order-service` and `payment-service`, built using **NestJS** and **Kafka** for event-driven communication. The services are containerized with **Docker** and use Kafka as the message broker.

## 📌 Features
- Order Service: Creates and emits orders to Kafka.
- Payment Service: Listens for order events and processes payments.
- Kafka-based asynchronous communication.
- Docker support for easy deployment.

## 🚀 Getting Started

### 1️⃣ **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (>= 16.x)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### 2️⃣ **Clone the Repository**
```sh
git clone https://github.com/umairdev1/nestjs-product-order-system-kafka.git
cd nestjs-product-order-system-kafka
```

### 3️⃣ **Start Services with Docker**
Run the following command to start Kafka, Zookeeper, and the microservices:
```sh
docker-compose up -d
```
This will start the Kafka broker, Zookeeper, and both microservices.

### 4️⃣ **Running Services Locally** (Without Docker)
You can start each service manually:
```sh
# Start Order Service
npm run start:order

# Start Payment Service
npm run start:payment
```
Or start both at once:
```sh
npm run start:all
```

### 5️⃣ **Testing the Services**
#### ✅ Create an Order (via Order Service)
Send a POST request using `cURL` or Postman:
```sh
curl -X POST http://localhost:3001/orders -H "Content-Type: application/json" -d '{"orderId": "12345"}'
```
Expected output in the Payment Service logs:
```sh
Received Order: 12345
Payment for Order 12345 completed successfully.
```

### 6️⃣ **Checking Kafka Messages**
To verify messages sent to Kafka, run:
```sh
docker exec -it kafka kafka-console-consumer.sh --bootstrap-server kafka:9092 --topic orders --from-beginning
```

## 🛠 Environment Variables
Create a `.env` file in the root directory and define:
```env
KAFKA_BROKER=localhost:9092
ORDER_SERVICE_PORT=3001
PAYMENT_SERVICE_PORT=3002
```
```

## 🐛 Troubleshooting
**1. Kafka Connection Error**
- Ensure Kafka and Zookeeper are running:
```sh
docker-compose ps
```
- Restart Kafka if needed:
```sh
docker-compose restart kafka
```



