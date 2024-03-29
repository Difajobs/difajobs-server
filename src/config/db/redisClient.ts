import { createClient } from 'redis';
import * as dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({
    url: process.env.URL_REDIS
});

(async () => {
    await redisClient.connect();
})();

redisClient.on('connect', () => console.log('Redis Client Connected'));
redisClient.on('error', (err) => console.log('Redis Client Connection Error', err));


export default redisClient;