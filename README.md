# Cars of 7-Eleven - Frontend Project

A car photography sharing platform built with React, featuring user authentication, photo uploads, and social interactions.

## 🌟 Features

- **User Authentication**: Complete registration and login system
- **Photo Fetching**: Fetch tagged photos via API from Tumblr
- **Social Interactions**: Like photos
- **Profile Management**: Edit user profile information
- **Responsive Design**: Optimized for desktop and mobile devices
- **Form Validation**: Real-time validation for user inputs

## 🛠️ Technologies Used

- **Frontend**: React.js, HTML5, CSS3
- **Routing**: React Router
- **API Integration**: RESTful API consumption
- **Authentication**: JWT tokens
- **Styling**: CSS Modules/BEM methodology

## 🔐 Authentication Flow

- **Users must register/login** to access the like feature
- **JWT tokens** are used for API authentication
- **Automatic token validation** and refresh

## 🌐 API Integration

**The application connects to Tumblr's backend services:**

- **Base URL:**
- **Authentication endpoints:** /signup, /signin
- **Protected routes require Authorization:** Bearer {token} header

## 📄 License

This project is part of the **TripleTen Web Development Program**.

## 📝 Nota ao revisor

Deixei **lang="en"** pois fiz todo o projeto em inglês, incluindo os títulos, campos de formulário e mensagens de erro.
