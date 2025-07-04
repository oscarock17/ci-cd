const redis = require('redis');

const client = redis.createClient({
    host: 'redis', // Nombre del servicio en docker-compose
    port: 6379
});

client.on('error', (err) => {
    console.error('Error connecting to Redis:', err);
});

const connect = async () => {
  if (!client.isOpen) {
    await client.connect();
  }
};

const setCache = async (key, value, expiration = 3600) => {
    await client.setex(key, expiration, JSON.stringify(value));
};

const getCache = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, data) => {
            if (err) {
                return reject(err);
            }
            resolve(data ? JSON.parse(data) : null);
        });
    });
};

module.exports = {
    connect,
    setCache,
    getCache
};