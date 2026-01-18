
import Redis from "ioredis";
const redis = new Redis(process.env.REDIS_URL);
console.log("Worker conectado ao Redis");
