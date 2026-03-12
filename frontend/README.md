# AIVA Frontend - Sign Up & Login

A simple React frontend for the AIVA auth flow (signup, login) with a clean dark theme.

## Step-by-step setup

### 1. Navigate to the frontend folder

```powershell
cd "c:\Users\Sagar Sharma\Downloads\AIVA-Project\frontend"
```

### 2. Install dependencies

```powershell
npm install
```

### 3. Start the backend (Spring Boot)

In a **separate terminal**, from the project root:

```powershell
cd "c:\Users\Sagar Sharma\Downloads\AIVA-Project\AIVA-Project"
./mvnw spring-boot:run
```

Or run `AivaProjectApplication.java` from your IDE. The backend must run on **http://localhost:8080**.

### 4. Start the frontend

Back in the frontend folder:

```powershell
npm run dev
```

The app will open at **http://localhost:3000**.

### 5. Use the app

- Open http://localhost:3000 in your browser
- Click **Sign up** to create an account
- After signup, you’ll be redirected to **Log in**
- Log in to get a JWT and land on the dashboard

---

## Project structure

```
frontend/
├── src/
│   ├── api/
│   │   └── auth.js        # API calls for signup/login
│   ├── components/
│   │   └── AuthLayout.jsx # Shared layout for auth pages
│   ├── pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Auth.css
│   │   └── Dashboard.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## API proxy

Vite proxies `/auth` to `http://localhost:8080` in dev, so frontend and backend can run separately without CORS issues.
