const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-consumer',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ 
  groupId: 'test-group', 
  allowAutoTopicCreation: true,
  fromBeginning: true  // 🔥 bu eski xabarlarni ham o‘qiydi
});

const run = async () => {
  await consumer.connect();
  console.log('✅ Consumer connected');

  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(`📩 Olingan xabar: ${message.value.toString()}`);
    },
  });
};

run().catch(console.error);
