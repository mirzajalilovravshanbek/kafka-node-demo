const { Kafka } = require('kafkajs');
const { Partitioners } = require('kafkajs');

// Kafka client sozlamalari
const kafka = new Kafka({
  clientId: 'my-producer',
  brokers: ['localhost:9092'], // Docker Kafka broker porti
});

const producer = kafka.producer({
  createPartitioner: Partitioners.LegacyPartitioner
});

const run = async () => {
  await producer.connect();
  console.log('✅ Producer connected');

  for (let i = 1; i <= 5; i++) {
    const message = `Salom Kafka! Xabar raqami: ${i}`;
    await producer.send({
      topic: 'test-topic',
      messages: [{ value: message }],
    });
    console.log(`📤 Yuborildi: ${message}`);
  }

  await producer.disconnect();
  console.log('🔌 Producer disconnected');
};

run().catch(console.error);
