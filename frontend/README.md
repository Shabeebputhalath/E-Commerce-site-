# 🛒 MERN Stack E-Commerce Web Application

A full-featured **E-Commerce Web Application** built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. This project demonstrates a modern production-ready architecture with authentication, product management, image uploads, cart functionality, and secure backend APIs.

---

# 🚀 Live Features

## 👤 User Features

* User Registration & Login (JWT Authentication)
* Secure Password Handling
* Browse Products
* Add to Cart
* Remove from Cart
* Toast Notifications for UI feedback
* Responsive Design (Mobile Friendly)

## 🛠 Admin Features

* Add Products
* Upload Product Images (Cloudinary Integration)
* Delete Products
* Manage Product Listings

---

# 🧑‍💻 Tech Stack

## Frontend

* React.js
* Vite
* React Router
* Tailwind CSS
* React Toastify

## Backend

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Cloudinary (Image Storage)
* dotenv (Environment Variables)

---

# 📂 Project Structure

```
E-Commerce-site/
│
├── frontend/          # React Frontend
├── backend/           # Node + Express Backend
├── .gitignore
└── README.md
```

---

# 🔐 Environment Variables Setup

Create a `.env` file inside **backend folder**:

```
PORT=
MONGO_URI=
JWT_SECRET=
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
```

⚠️ Never upload `.env` file to GitHub

---

# ⚙️ Installation Guide

## Step 1 — Clone Repository

```
git clone https://github.com/your-username/your-repo-name.git
```

## Step 2 — Install Frontend Dependencies

```
cd frontend
npm install
npm run dev
```

## Step 3 — Install Backend Dependencies

```
cd backend
npm install
npm start
```

---

# ☁️ Cloudinary Setup

Create account:

[https://cloudinary.com/](https://cloudinary.com/)

Copy credentials into `.env` file

```
CLOUDINARY_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_SECRET_KEY=
```

---

# 🗄 MongoDB Setup

Create account:

[https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)

Create cluster → Database → Copy connection string

Paste into `.env`

```
MONGO_URI=
```

---

# 🔑 Authentication System

This project uses:

* JWT Token Authentication
* Protected Routes
* Secure Password Hashing

---

# 📸 Screenshots (Optional)

Add screenshots here later:

```
/images/homepage.png
/images/productpage.png
/images/adminpanel.png
```

---

# 📦 API Endpoints Overview

## Auth Routes

```
POST /api/user/register
POST /api/user/login
```

## Product Routes

```
GET /api/product/list
POST /api/product/add
DELETE /api/product/remove
```

## Cart Routes

```
POST /api/cart/add
POST /api/cart/remove
GET /api/cart/get
```

---

# 🔒 Security Features

* Environment Variables Protection
* JWT Authentication
* Password Hashing
* Secure API Routes

---

# 📈 Future Improvements

* Payment Gateway Integration (Stripe / Razorpay)
* Order Tracking System
* Wishlist Feature
* Admin Dashboard Analytics
* Product Search Filter

---

# 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

---

# ⭐ Support

If you like this project, please give it a **star ⭐ on GitHub**.

---

# 👨‍💻 Author

Developed by **Shabeeb Puthalath**

---

# 📜 License

This project is licensed under the **MIT License**.
