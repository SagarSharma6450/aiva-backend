# AIVA — AI-Powered Interview & Hiring Assessment Platform

AIVA (AI Interview Virtual Assistant) has grown from a solo mock-interview practice tool into a two-sided platform: **candidates** can practice AI-driven mock interviews with resume-personalized questions, and **organizations** can create proctored hiring assessments, invite candidates, and review AI-graded submission reports.

---

## 🚀 Features

### For Candidates
- **AI-Generated Mock Interviews** — Practice sessions powered by the Groq API, with question sets by interview type
- **Resume-Personalized Questions** — Upload a resume (PDF, parsed via Apache PDFBox) so interview questions are tailored to it
- **Answer Evaluation & Feedback** — AI evaluates submitted answers and returns structured feedback and scores
- **Interview History** — Review past sessions and results from a personal dashboard
- **Assessment Test-Taking** — Take organization-issued assessments within scheduled time slots, with a guided instructions step before starting
- **In-Browser Proctoring Signals** — Tab-switch/visibility and other proctor events are captured and sent to the backend during a live test session

### For Organizations (Hiring/Admin)
- **Organization Signup** — Separate signup/login flow for organizations, distinct from candidate accounts
- **Test Creation & Question Banks** — Admins create assessment tests and add questions manually or generate AI-drafted questions
- **Slot Scheduling** — Define time slots for a test and manage candidate invitations per slot
- **Candidate Invitations** — Invite candidates to a specific test and track invitation status
- **Submission Reports** — View per-test submission lists and drill into an individual candidate's submission, including AI-assisted grading
- **Proctoring Review** — Proctor events captured during a candidate's session are available for admin review

### Platform-Wide
- **JWT Authentication** — Secure, token-based auth shared across candidate and organization roles
- **Role-Based Access Control** — Spring Security routes candidate vs. admin/organization endpoints separately
- **User Profiles** — View and update profile details
- **3D/Animated UI** — Interactive assistant scene (Three.js) and motion effects (Framer Motion) on top of a responsive, mobile-friendly React interface

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 (Vite), React Router, Framer Motion, Three.js, Lucide icons |
| Backend | Java 17, Spring Boot 4 (Web MVC, Security, Data JPA, Validation) |
| Authentication | JWT (jjwt) |
| AI Integration | Groq API |
| Resume Parsing | Apache PDFBox |
| Database | MySQL |
| Containerization | Docker |
| Deployment | Vercel (frontend), Render/similar (backend) |

---

## 📁 Project Structure

```
aiva-backend/
├── AIVA-Project/                     # Spring Boot backend
│   └── src/main/java/com/aiva/AIVA_Project/
│       ├── config/                   # Security configuration
│       ├── controller/               # REST controllers (auth, admin, candidate, interview, profile, resume)
│       ├── dto/                      # Request/response payloads
│       ├── entity/                   # JPA entities (users, orgs, tests, submissions, sessions...)
│       ├── repository/               # Spring Data repositories
│       ├── security/                 # JWT filter, JWT util, auth context
│       └── service/                  # Business logic (Groq calls, grading, resume parsing, test/report services)
├── frontend/                         # React (Vite) frontend
│   └── src/
│       ├── api/                      # API client modules
│       ├── components/               # Shared UI (assistant scene, modals, layout, nav)
│       └── pages/
│           ├── admin/                # Org/admin dashboard, create test, test detail, submission report
│           └── candidate/            # Candidate test list, instructions, live assessment session, submitted
├── Dockerfile
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

Configure `application.properties`:

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

The backend starts at `http://localhost:8080`.

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend starts at the Vite dev server URL (default `http://localhost:5173`).

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

### Auth — `/auth`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/auth/signup` | Register a new candidate |
| POST | `/auth/org/signup` | Register a new organization |
| POST | `/auth/login` | Login and receive JWT token |

### Profile — `/profile`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/profile` | Get current user's profile |
| PUT | `/profile` | Update profile details |

### Resume — `/resume`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/resume/upload` | Upload a resume (PDF) for personalization |
| GET | `/resume/status` | Check resume personalization status |

### Mock Interview — `/interview`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/interview/types` | List available mock interview types |
| POST | `/interview/start/{typeId}` | Start a new interview session |
| GET | `/interview/{sessionId}/question` | Get the current question |
| GET | `/interview/{sessionId}/questions` | List all questions for a session |
| POST | `/interview/{sessionId}/question/{questionId}/submit` | Submit an answer |
| POST | `/interview/{sessionId}/question/{questionId}/evaluate` | Get AI evaluation for an answer |
| GET | `/interview/{sessionId}/result` | Get final session result |
| GET | `/interview/history` | Get past interview sessions |

### Admin / Organization — `/admin/tests`, `/admin/reports`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/admin/tests` | Create a new assessment test |
| GET | `/admin/tests` | List tests |
| GET | `/admin/tests/{testId}` | Get test details |
| PUT | `/admin/tests/{testId}` | Update a test |
| POST | `/admin/tests/{testId}/questions` | Add a question to a test |
| POST | `/admin/tests/{testId}/questions/ai-draft` | Generate an AI-drafted question |
| POST | `/admin/tests/{testId}/slots` | Create a time slot |
| GET | `/admin/tests/{testId}/slots` | List slots for a test |
| PUT | `/admin/tests/{testId}/slots/{slotId}` | Update a slot |
| DELETE | `/admin/tests/{testId}/slots/{slotId}` | Delete a slot |
| POST | `/admin/tests/{testId}/invite` | Invite a candidate to a test |
| GET | `/admin/tests/{testId}/invitations` | List invitations for a test |
| GET | `/admin/reports/tests/{testId}/submissions` | List submissions for a test |
| GET | `/admin/reports/submissions/{submissionId}` | Get a candidate's submission report |

### Candidate Assessments — `/candidate/tests`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/candidate/tests` | List tests assigned to the candidate |
| GET | `/candidate/tests/{testId}/instructions` | Get test instructions |
| POST | `/candidate/tests/{testId}/start` | Start a test submission |
| GET | `/candidate/tests/submissions/{submissionId}/question/{index}` | Get a question by index |
| POST | `/candidate/tests/submissions/{submissionId}/question/{questionId}/answer` | Submit an answer |
| POST | `/candidate/tests/submissions/{submissionId}/proctor-event` | Report a proctoring event |
| POST | `/candidate/tests/submissions/{submissionId}/complete` | Complete/submit the test |

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
