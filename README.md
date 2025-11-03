# 🛍️ StyleVerse – Full Stack E-Commerce Application

## 🪄 Introduction
**StyleVerse** is a modern full-stack e-commerce platform designed for a seamless shopping experience.  
Built using **React**, **Node.js**, **Express**, and **MongoDB**, it allows users to browse, shop, and manage orders efficiently — while providing an intuitive admin dashboard for managing products and orders.


<img width="1825" height="982" alt="image" src="https://github.com/user-attachments/assets/1fb0c7af-e267-49d3-956a-57cc8c75a07e" />


<img width="1915" height="950" alt="image" src="https://github.com/user-attachments/assets/09fa3625-4789-4552-a9bb-2ac91ec469bd" />

## Admin
<img width="1882" height="875" alt="image" src="https://github.com/user-attachments/assets/843062ba-2130-4473-8acb-f3e1d11baf83" />




---

## 🧭 Project Structure

### 🖥️ Frontend – `Ecommerce-App`
```bash
Ecommerce-App/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ BestSeller.jsx
│  │  ├─ CartTotal.jsx
│  │  ├─ Footer.jsx
│  │  ├─ Hero.jsx
│  │  ├─ LatestCollections.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ NewsLetterBox.jsx
│  │  ├─ OurPolicy.jsx
│  │  ├─ ProductItem.jsx
│  │  ├─ RelatedProducts.jsx
│  │  ├─ SearchBar.jsx
│  │  └─ Title.jsx
│  ├─ context/
│  │  └─ ShopContext.jsx
│  ├─ pages/
│  │  ├─ About.jsx
│  │  ├─ Cart.jsx
│  │  ├─ Collections.jsx
│  │  ├─ Contacts.jsx
│  │  ├─ Home.jsx
│  │  ├─ Login.jsx
│  │  ├─ Orders.jsx
│  │  ├─ PlaceOrder.jsx
│  │  ├─ Product.jsx
│  │  ├─ Profile.jsx
│  │  └─ Verify.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
├─ tailwind.config.js
└─ vite.config.js
```


### ⚙️ Backend
```bash
Backend/
├─ config/
│  ├─ cloudinary.js
│  └─ mongodb.js
├─ controllers/
│  ├─ cartController.js
│  ├─ orderController.js
│  ├─ productsController.js
│  └─ userController.js
├─ middleware/
│  ├─ adminAuth.js
│  ├─ auth.js
│  └─ multer.js
├─ models/
│  ├─ orderModel.js
│  ├─ productModel.js
│  └─ userModel.js
├─ routes/
│  ├─ cartRoute.js
│  ├─ orderRoute.js
│  ├─ productRoute.js
│  └─ userRoutes.js
├─ server.js
├─ package.json
└─ vercel.json
```
###🛠️ Admin Panel
```
bash
admin/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  ├─ Login.jsx
│  │  ├─ Navbar.jsx
│  │  └─ Sidebar.jsx
│  ├─ pages/
│  │  ├─ Add.jsx
│  │  ├─ List.jsx
│  │  └─ Orders.jsx
│  ├─ App.jsx
│  ├─ App.css
│  ├─ index.css
│  └─ main.jsx
├─ index.html
├─ package.json
└─ vite.config.js
```

# Deployment Links
```bash
FrontEnd  : https://styleverse-frontend-app.vercel.app/
Backend : https://ecommerce-site-backend-green.vercel.app/
Admin : https://admin-panel-livid-ten.vercel.app
```

## 🚀 Getting Started

### 🧩 Clone the Repository
```bash
[git clone https://github.com/maheshtidgam/Ecommerce_site.git
```
## Install Dependencies
# Frontend
cd Ecommerce-App && npm install

## Backend
cd ../Backend && npm install

## Admin Panel
cd ../admin && npm install

▶️ Run the Project
## Start Frontend
npm run dev

## Start Backend
npm server

## Start Admin Panel
npm run dev

# 💻 Tech Stack
### Frontend 
React.js ⚛️, JavaScript ES6+, Tailwind CSS 🎨, Context API
### Backend	
Node.js 🟢, Express.js 🚀, MongoDB 🍃, JWT 🔑, Cloudinary ☁️, Multer 📸


# ✨ Features
```bash
🛒 User Features

🔐 User Authentication (Login, Register, Verify)

🛍️ Browse Products – filter, search, and view details

🧺 Cart Management – add/remove/update products

💳 Place Orders – checkout and order confirmation

📦 Order Tracking – view past and active orders

👤 Profile Section – manage user info and history

🧑‍💼 Admin Features

➕ Add Products with images (Cloudinary upload)

🗂️ Manage Orders – view and update statuses

✏️ Edit or Remove Products
```


