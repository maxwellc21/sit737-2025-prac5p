# 🔢 Containerization Microservice Calculator App – SIT737 Task 5.1P

> A containerized Node.js calculator application built with microservices, React frontend, and Docker Compose 🐳

---

## 📚 Project Overview

This app demonstrates refactoring a monolithic calculator into **independent microservices** using Docker. It features:

- **Calculator Service** – Performs `add` and `subtract`
- **Log Service** – Stores every calculation with metadata
- **Gateway Service** – Central API router
- **Frontend** – React app UI

---

## 🚀 Technologies Used

| Tool               | Purpose                    |
| ------------------ | -------------------------- |
| **Node.js**        | Backend services (API)     |
| **React**          | Frontend (User Interface)  |
| **Docker**         | Containerization           |
| **Docker Compose** | Service orchestration      |
| **Axios**          | HTTP requests              |
| **Winston**        | Advanced logging           |
| **Morgan**         | Request logging middleware |

---

## ✅ Requirements

Make sure you have the following installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) or `curl`
- A modern browser (for the frontend)

---

1️⃣ Clone the Repo

```bash
git clone https://github.com/your-username/sit737-2025-prac5p.git
cd sit737-2025-prac5p

```

---

2️⃣ Build & Start All Services

```bash
docker-compose up --build

```

🌐 App Access

Service Port URL

Frontend UI 5173 http://localhost:5173

Gateway API 3000 http://localhost:3000

Calculator 3001 http://localhost:3001

Log Service 3002 http://localhost:3002
