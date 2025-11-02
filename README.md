<h1 align="center">💼 Recruitment Platform Backend API</h1>

<p align="center">
  A complete backend system for a <b>Job Recruitment Platform</b> connecting Jobseekers and Employers — featuring secure authentication, role-based access, resume uploads, and application management.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18+-green?style=flat-square&logo=node.js">
  <img src="https://img.shields.io/badge/Express.js-Backend-blue?style=flat-square&logo=express">
  <img src="https://img.shields.io/badge/MongoDB-Atlas-success?style=flat-square&logo=mongodb">
  <img src="https://img.shields.io/badge/Cloudinary-Uploads-blue?style=flat-square&logo=cloudinary">
  <img src="https://img.shields.io/badge/Postman-Tested-orange?style=flat-square&logo=postman">
</p>

---

## 🌐 Live Demo

🚀 **Deployed API Base URL:**  

Base URL: [https://job-recruitment-platform-backend.onrender.com/](https://job-recruitment-platform-backend.onrender.com/)

You can test endpoints using Postman or the provided API Workflow document.

## 🚀 Project Overview

This backend API simulates a **real-world hiring process** — Employers can post jobs, and Jobseekers can search, apply, and manage applications.  
It includes **complete authentication, job posting, application workflows, and database validations**, all powered by **Node.js + Express + MongoDB Atlas**.

---

## ✨ Key Features

### 👤 Authentication

- Register & Login (Jobseeker / Employer)
- JWT-based token authentication
- Passwords securely hashed with bcrypt

### 🏢 Employer Features

- Create, update, delete jobs
- View applicants for each job
- Update candidate application status (`applied`, `reviewed`, `accepted`, `rejected`)

### 👨‍🎓 Jobseeker Features

- Search jobs by title, company, skills, or location
- Apply for jobs with resume uploads (via Multer + Cloudinary)
- Track applications and withdraw them anytime

### 🧱 Security & Enhancements

- Helmet, XSS-Clean, Mongo-sanitize
- Rate limiting enabled
- Role-based access control (RBAC)
- Error handling and validation for all endpoints

---

## 🧩 Tech Stack

| Layer | Technology |
|:------|:------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB Atlas |
| **Authentication** | JWT (JSON Web Token) |
| **File Uploads** | Multer + Cloudinary |
| **Security** | Helmet, XSS-Clean, Rate-Limiter |
| **Testing** | Postman |
| **Deployment** | Render / Railway |

---

## 🗂️ Folder Structure

```
Job-recruitment-Platform-Backend/
│
├── config/               # Database & Cloudinary configs
├── controllers/          # Business logic for routes
├── middlewares/          # Auth, Multer, Role checks
├── models/               # Mongoose schemas
├── routes/               # API endpoints
├── .env.example          # Environment template
├── server.js             # Entry point
├── API_WORKFLOW.txt      # Step-by-step testing guide
├── RecruitmentPlatform_PostmanCollection.json  # Ready Postman collection
└── README.md             # Project documentation
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/Job-recruitment-Platform-Backend.git
cd Job-recruitment-Platform-Backend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file:

```env
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-jwt-secret
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
PORT=5000
```

### 4️⃣ Run server

```bash
npm start
```

✅ Server runs on `http://localhost:5000`

---

## 🌍 Deployment

Once deployed (Render/Railway/Heroku), the API can be accessed publicly via:

```bash
https://your-app.onrender.com/api
```

---

## 🧠 API Endpoints Overview

### 🔑 Authentication

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/users/register` | Register Jobseeker/Employer |
| POST | `/api/users/login` | Login and get token |

### 🏢 Jobs (Employer)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/jobs` | Create a new job |
| GET | `/api/jobs` | Get all jobs with filters |
| GET | `/api/jobs/:id` | Get single job |
| PATCH | `/api/jobs/:id` | Update job |
| DELETE | `/api/jobs/:id` | Delete job |

### 👨‍🎓 Applications (Jobseeker)

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/applications/:jobId` | Apply for a job |
| GET | `/api/applications/me` | Get my applications |
| DELETE | `/api/applications/:applicationId` | Withdraw an application |

### 🧑‍💼 Employer Application Management

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/applications/job/:jobId` | View all applicants |
| PATCH | `/api/applications/:applicationId` | Update applicant status |

---

## 🧪 Testing & Workflow

The project is fully tested with **Postman**.  
You can directly import the included Postman collection:

📁 `RecruitmentPlatform_PostmanCollection.json`

and follow the workflow defined in  
📄 `API_WORKFLOW.txt`  

### Full Lifecycle

1. Register both Employer and Jobseeker  
2. Login → copy tokens  
3. Employer → create job  
4. Jobseeker → search & apply with resume  
5. Jobseeker → view “My Applications”  
6. Employer → view applicants & update status  
7. Jobseeker → withdraw if needed  

---

## 🔒 Role-Based Access Summary

| Action | Role | Access |
|--------|------|--------|
| Register/Login | Both | ✅ |
| Create/Update/Delete Job | Employer | ✅ |
| Apply/View Applications | Jobseeker | ✅ |
| Manage Applications | Employer | ✅ |
| Without Token | Any | ❌ Unauthorized |

---

## 🗄️ MongoDB Structure Overview

### Users Collection

- `_id`, `name`, `email`, `password (hashed)`, `role`

### Jobs Collection

- `_id`, `title`, `description`, `skills[]`, `industry`, `employer`, `createdAt`

### Applications Collection

- `_id`, `job`, `applicant`, `coverLetter`, `resumeUrl`, `status`, `timestamps`

---

## 🧰 Security Highlights

- 🔐 JWT-based authentication  
- 🧹 Data sanitization against NoSQL Injection  
- 🧱 Helmet for secure HTTP headers  
- 🚫 Rate-limiting protection  
- 💾 Cloudinary file security (auto deletion on withdraw)

---

## 🧩 Integrations Used

- **MongoDB Atlas** → cloud database  
- **Cloudinary** → resume uploads  
- **Multer** → middleware for file handling  
- **JWT** → authentication tokens  
- **Postman** → testing & workflow validation  

---

## 🧑‍💻 Crafted By

### Shaik Mohammed Hussain

### 💻 Full Stack Web Developer | Bengaluru | Karnataka | India

### 📧 Email: [ mohammedhussainshaik76@gmail.com ]

### 🔗 [LinkedIn](https://www.linkedin.com/in/hussainshaik-devv)

### 🔗 [GitHub](https://www.linkedin.com/in/hussainshaik-devv)

### Do not forget to give a star ⭐ if you like this Repo/Project

---

## ⭐ Acknowledgements

This backend system is part of a full-stack project demonstrating professional-grade backend architecture, integration with cloud services, and scalable REST API design.

> 💡 **Built with passion, tested with precision, deployed for performance.** 🚀
