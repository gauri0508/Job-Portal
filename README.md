# 💼 Job Portal

A sleek, responsive, and modern **Job Portal Web Application** built with React, Vite, Tailwind CSS, and Supabase. It aims to connect job seekers with companies in a seamless and user-friendly environment. This project is designed to simulate a real-world recruitment platform where:

- **Job seekers** can browse, search, and apply for jobs.
- **Recruiters** can post job openings and manage their listings.
- **Companies** can build a presence by showcasing their profiles and logos.

---

## ✨ Key Highlights

- 🔍 **Search for Jobs** with ease using a clean and responsive UI.
- 🧑‍💼 **Post New Jobs** and manage them with real-time updates.
- 🏢 **Company Carousel** displaying logos of hiring companies.
- 🎨 **Fully responsive layout** with scalable design using Tailwind CSS v4.1.
- ☁️ **Supabase backend** with real-time database, authentication, and storage.
- 📂 Clean folder structure for scalability and readability.
- ⚡ Fast build & hot reload with Vite.

---

## 🛠️ Built With

| Tech            | Purpose                              |
|-----------------|--------------------------------------|
| **React**       | Frontend library                     |
| **Vite**        | Fast build tool                      |
| **Tailwind CSS**| Modern utility-first styling         |
| **Supabase**    | Backend (DB, Auth, Storage)          |
| **React Router**| Navigation & routing                 |

---

## 📦 Getting Started

Follow these steps to run the project locally:

### 1. Clone the repository:

```bash
git clone https://github.com/gauri0508/Job-Portal.git
cd Job-Portal
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Configure environment variables:

Create a `.env` file in the root:

```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

> 📝 You can find these values in your [Supabase Project Dashboard](https://app.supabase.com/).

### 4. Run the app locally:

```bash
npm run dev
```

Visit `http://localhost:5173` to see the project running.

---

## 🧭 Project Structure

```
Job-Portal/
├── public/                 # Static assets (icons, logos)
├── src/
│   ├── components/         # Buttons, Navbar, Cards, etc.
│   ├── pages/              # Route-based pages (Home, Post Job, Jobs)
│   ├── utils/              # Supabase config & helper functions
│   ├── App.jsx             # Application root component
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── tailwind.config.js      # Tailwind configuration
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite configuration
```

---

## 🔐 Authentication

Supabase's Auth module is used to handle secure user authentication and authorization. It supports:

- Sign-up/sign-in (email or OAuth)
- Token-based secure API calls
- Protected routes and restricted actions

---


## 🙋‍♀️ Author

Made with ❤️ by [**Gauri**](https://github.com/gauri0508)

---


