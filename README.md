
# 🚀 Full Stack Project Template

A complete and ready-to-use Full Stack Project Template using **React.js**, **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**. This template provides all the essential tools and folder structures you need to kickstart your next web application.

---

## 📁 Tech Stack

- **Frontend**: React.js (JavaScript)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via Mongoose)
- **Authentication**: JSON Web Token (JWT)
- **Environment Variables**: .env Configuration
- **Security**: Helmet, CORS, dotenv
- **Tools & Libraries**:
  - axios
  - react-router-dom
  - bcryptjs
  - mongoose
  - nodemon
  - concurrently
  - dotenv
  - express

---

## ⚙️ Folder Structure

```
project-template/
├── client/                 # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/       # API Calls
│       └── App.js
├── server/                 # Express backend
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── .env.example
│   └── server.js
├── .gitignore
├── README.md
├── package.json
└── package-lock.json
```

---

## 🛠️ Features Included

- ✅ JWT-based Authentication (Login/Register)
- ✅ MongoDB Integration with Mongoose
- ✅ Protected Routes (Frontend & Backend)
- ✅ Centralized API service with Axios
- ✅ Reusable Component Structure
- ✅ .env Support for secrets and ports
- ✅ Backend CORS and Helmet for basic security
- ✅ Concurrently run client & server
- ✅ Development and Production scripts

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v16 or above)
- npm or yarn
- MongoDB local instance or MongoDB Atlas

---

### 🧩 Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/project-template.git
cd project-template
```

2. **Install dependencies for both frontend and backend**:

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. **Create environment variables**:

- Inside the `server/` directory, create a `.env` file based on `.env.example`

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

---

### 🧪 Development Mode

Run both frontend and backend using `concurrently`.

```bash
# At root level
npm install
npm run dev
```

This will:
- Start the **React app** on `http://localhost:3000`
- Start the **Express API** on `http://localhost:5000`

---

### 🏁 Production Build

1. Build the frontend:

```bash
cd client
npm run build
```

2. Serve the React app via the Express server:

Ensure your server is configured to serve static files from `client/build`.

---

## 🔐 Environment Variables Guide

| Key           | Description                          |
| ------------- | ------------------------------------ |
| `PORT`        | Backend server port (default: 5000)  |
| `MONGO_URI`   | MongoDB connection string            |
| `JWT_SECRET`  | Secret key for signing JWT tokens    |

---

## 📌 Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `npm run dev`  | Runs client and server concurrently      |
| `npm start`    | Starts production server (after build)   |
| `npm run build`| Builds the React app for production      |

---

## 💡 Deployment Suggestion

- Use **Render**, **Vercel**, or **Netlify** for frontend.
- Use **Render**, **Railway**, or **Heroku** for backend.
- Set environment variables in production dashboard (never commit `.env`).

---

## 🧑‍💻 Author

**Abdullah Al Noman**  
📧 Email: abdullahalnoman.khu@gmail.com 
🌐 Portfolio: [noman-s-portfolio.surge.sh]

---

## ⚖️ License

```
MIT License

Copyright (c) 2025 Abdullah Al Noman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
```

---

## 💬 Contribution

Feel free to fork, modify, and contribute. Pull requests are welcome.

---

## 📞 Contact

For any queries, collaboration, or support, reach out via email or LinkedIn.

---

> This template is crafted to boost productivity, reduce boilerplate, and help you launch your full-stack applications faster. Happy Coding!
