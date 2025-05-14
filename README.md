# ✨ Full Stack Realtime Chat App

A real-time full-stack chat application built with **MERN**, **Socket.io**, **TailwindCSS**, and **DaisyUI**, featuring user authentication, live messaging, online user status, and seamless deployment.

---

## 🚀 Features

* 🌟 **Tech Stack**: MongoDB, Express.js, React, Node.js (MERN)
* 👾 **Real-time Messaging**: Using **Socket.io**
* 🎃 **Authentication & Authorization**: JWT-based secure login/signup
* 🟢 **Online Status Tracking**
* 🌐 **Global State Management**: With **Zustand**
* 🎨 **Styling**: TailwindCSS + DaisyUI for beautiful UI
* 🛡️ **Robust Error Handling**: Both on client and server sides
* ⚙️ **Environment-specific Configurations**

---

## 📁 Folder Structure

```
.
├── frontend      # React frontend
├── backend      # Node.js backend
├── .env        # Environment variables
├── README.md
```

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/realtime-chat-app.git
cd realtime-chat-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MongoUrl=your_mongo_db_connection_string
accessToken=your_jwt_secret
accessTokenExpiration=1d
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
NODE_ENV=development
```

Start the backend server:

```bash
npm start
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run build
npm start
```
Create a `.env` file in the `frontend` directory:

```env
VITE_API_BASE_URL=http://localhost:5000
```
---

## 📸 Screenshots

![Screenshot (1205)](https://github.com/user-attachments/assets/2d174b55-2cc6-45cb-8ef5-8a8e3fa2ffd3)
![Screenshot (1202)](https://github.com/user-attachments/assets/1b4e7aae-1f7b-4172-9549-1b9a9a70feba)
![Screenshot (1204)](https://github.com/user-attachments/assets/89a9952d-2772-479f-8e2b-6b58abb60625)



