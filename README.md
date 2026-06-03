# AIVA — AI-Powered Interview Preparation Platform

AIVA (AI Interview Virtual Assistant) is a full-stack web application that helps users prepare for technical and HR interviews using AI-generated questions, real-time feedback, and personalized practice sessions.

---

## 🚀 Features

- **AI-Generated Interview Questions** — Powered by the Groq API for fast, context-aware question generation
- **Role-Based Practice** — Tailored questions based on job role, domain, and difficulty level
- **Answer Feedback** — AI evaluates user responses and provides constructive feedback
- **JWT Authentication** — Secure user registration and login with token-based auth
- **User Dashboard** — Track practice history and performance over time
- **Responsive UI** — Clean, mobile-friendly interface built with React.js

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, CSS |
| Backend | Java, Spring Boot |
| Authentication | JWT (JSON Web Tokens) |
| AI Integration | Groq API |
| Database | MySQL |
| Containerization | Docker |
| Deployment | Vercel (frontend) |

---

## 📁 Project Structure

```
aiva-backend/
├── AIVA-Project/        # Spring Boot backend (REST APIs, JWT auth, Groq integration)
│   └── src/
│       └── main/java/
├── frontend/            # React.js frontend
│   └── src/
├── Dockerfile           # Docker configuration
└── .gitignore
```

---

## ⚙️ Getting Started

### Prerequisites

- Java 17+
- Node.js 18+
- MySQL 8+
- Maven
- Docker (optional)

### 1. Clone the Repository

```bash
git clone https://github.com/SagarSharma6450/aiva-backend.git
cd aiva-backend
```

### 2. Backend Setup

```bash
cd AIVA-Project
```

Configure your `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/aiva_db
spring.datasource.username=your_username
spring.datasource.password=your_password

jwt.secret=mySecretKey123456789abcdefghijklmnop

groq.api.key=gsk_xxxxxxxxxxxxxxxxxxxxxxxx
```

Run the Spring Boot server:

```bash
mvn spring-boot:run
```

The backend will start at `http://localhost:8080`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm start
```

The frontend will start at `http://localhost:3000`.

### 4. Docker (Optional)

```bash
docker build -t aiva-backend .
docker run -p 8080:8080 aiva-backend
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `spring.datasource.url` | MySQL connection URL |
| `spring.datasource.username` | Database username |
| `spring.datasource.password` | Database password |
| `jwt.secret` | Secret key for JWT signing |
| `groq.api.key` | API key from [Groq Console](https://console.groq.com) |

---

## 📡 API Endpoints (Overview)

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Login and receive JWT token |
| GET | `/api/interview/questions` | Get AI-generated questions |
| POST | `/api/interview/feedback` | Submit answer and get feedback |

---

## 👥 Contributors

- [Jafar Pathan](https://github.com/jafar-pathan) 
- [Sagar Sharma](https://github.com/SagarSharma6450) 
- [Arya Sri]
- [Manas Chhonker] 

---

## 📄 License

This project is developed as an academic final-year project. All rights reserved by the contributors.

---

## 🌐 Live Demo

Frontend: [aiva-backend.vercel.app](https://aiva-backend.vercel.app)
