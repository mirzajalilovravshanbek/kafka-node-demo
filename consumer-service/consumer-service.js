const fs = require('fs');
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'log-consumer',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'log-group' });

const run = async () => {
  await consumer.connect();
  console.log('✅ Consumer ulandi');

  await consumer.subscribe({ topic: 'log-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ message }) => {
      const logMessage = message.value.toString();
      console.log(`📩 Olingan log: ${logMessage}`);

      fs.appendFileSync('./logs/logs.txt', logMessage + '\n');
    },
  });
};

run().catch(console.error);
