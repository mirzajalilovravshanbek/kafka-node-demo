# 🧩 Kafka Node.js Demo

Bu loyiha **Apache Kafka** bilan **Node.js (KafkaJS kutubxonasi)** orqali ishlashni o‘rganish uchun yaratilgan.  
Loyiha **Docker Compose** yordamida Kafka va Zookeeper konteynerlarini ishga tushiradi va **producer** hamda **consumer** orqali xabar almashishni ko‘rsatadi.

---

## 📦 Texnologiyalar
- 🐳 Docker & Docker Compose  
- ⚙️ Apache Kafka  
- 🧠 Node.js + [KafkaJS](https://kafka.js.org/) kutubxonasi  

---

## 📁 Loyiha strukturası

```
kafka-node-demo/
│
├── docker-compose.yml       # Kafka va Zookeeper konteynerlarini sozlash
├── producer.js               # Node.js producer - xabar yuboradi
├── consumer.js               # Node.js consumer - xabarlarni o‘qiydi
└── README.md                 # Ushbu fayl
```

---

## 🚀 1. O‘rnatish

**1️⃣ Repozitoriyani klonlang:**
```bash
git clone https://github.com/mirzajalilovravshanbek/kafka-node-demo.git
cd kafka-node-demo
```

**2️⃣ Docker konteynerlarni ishga tushiring:**
```bash
docker compose up -d --build
```

Bu buyruq Kafka (`localhost:9092`) va Zookeeper (`localhost:2181`) konteynerlarini ishga tushiradi.

---

## 🧠 2. Kafka topic yaratish

Konteyner ichiga kirib, topic yarating:
```bash
docker exec -it kafka bash
kafka-topics --create --topic test-topic --bootstrap-server localhost:9092 --partitions 1 --replication-factor 1
```

So‘ngra ro‘yxatni tekshiring:
```bash
kafka-topics --list --bootstrap-server localhost:9092
```

---

## 💬 3. Node.js Producer

Producer `test-topic` nomli topic’ga xabar yuboradi.

```bash
node producer.js
```

Kutilgan natija:
```
✅ Producer connected
📤 Yuborildi: Salom Kafka! Xabar raqami: 1
📤 Yuborildi: Salom Kafka! Xabar raqami: 2
🔌 Producer disconnected
```

---

## 📩 4. Node.js Consumer

Consumer `test-topic` dan xabarlarni o‘qiydi.

```bash
node consumer.js
```

Kutilgan natija:
```
✅ Consumer connected
📩 Olingan xabar: Salom Kafka! Xabar raqami: 1
📩 Olingan xabar: Salom Kafka! Xabar raqami: 2
```

---

## 🧹 5. Konteynerlarni to‘xtatish

```bash
docker compose down
```

Agar konteynerlar to‘liq o‘chsin desangiz:
```bash
docker system prune -f
```

---

## 🧑‍💻 Muallif

**Ravshanbek Mirzajalilov**  
📧 [mirzajalilovravshanbek@gmail.com]  
🌐 [github.com/mirzajalilovravshanbek](https://github.com/mirzajalilovravshanbek)

---

## ⭐ Tavsiya

Agar sizga loyiha foydali bo‘lsa — ⭐ **Star** bosib qo‘ying!  
Bu Kafka bilan Node.js o‘rtasidagi integratsiyani o‘rganayotganlarga yordam beradi 🚀
