const express = require('express');
const { Kafka } = require('kafkajs');

const app = express();
app.use(express.json());

const kafka = new Kafka({
  clientId: 'log-producer',
  brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
});

const producer = kafka.producer();

const start = async () => {
  await producer.connect();
  console.log('✅ Producer ulandi');
};
start();

app.post('/log', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'message required' });

  await producer.send({
    topic: 'log-topic',
    messages: [{ value: message }],
  });

  console.log(`📤 Yuborildi: ${message}`);
  res.json({ status: 'ok', message });
});

app.listen(3000, () => console.log('🚀 Producer API 3000-portda'));
