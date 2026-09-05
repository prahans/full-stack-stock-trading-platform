# 📈 Full Stack Stock Trading Platform (Zerodha Clone)

A modern **full-stack stock trading platform** inspired by Zerodha, built using the MERN stack. This project is designed to simulate the core functionality of a real-world trading platform while following scalable backend architecture and clean frontend design.

> 🚧 This project is currently under active development.

---

# ✨ Features

- 🔐 User Authentication (Signup & Login)
- 🍪 JWT Authentication using HTTP-only Cookies
- 📊 Trading Dashboard
- 💼 Portfolio Management
- 📈 Holdings Management
- 📉 Positions Tracking
- 📦 RESTful API
- 🗄 MongoDB Database
- ⚡ Fast React Frontend powered by Vite
- 🎨 Responsive UI
- 🧩 Modular Backend Architecture
- 🔒 Protected Dashboard Routes

---

# 🛠 Tech Stack

## Frontend

- React
- Vite
- React Router
- Axios
- CSS

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- CORS
- bcrypt

---

# 📁 Project Structure

```
full-stack-stock-trading-platform/
│
├── frontend/          # Public website
│
├── dashboard/         # Authenticated trading dashboard
│
├── backend/           # Express REST API
│
└── README.md
```

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/prahans/full-statck-stock-trading-platform-Zerodha-Clone-.git
```

```
cd full-statck-stock-trading-platform-Zerodha-Clone-
```

---

## 2. Install Dependencies

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

### Dashboard

```bash
cd ../dashboard
npm install
```

---

## 3. Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
PORT=3002

MONGO_URL=your_mongodb_connection_string

TOKEN_KEY=your_secret_key

FRONTEND_URL=http://localhost:5173
DASHBOARD_URL=http://localhost:5174
```

### Frontend and dashboard environment variables

Each app has its own environment settings. For local use, copy its `.env.example`
to `.env.local`. Vite does not load `.env.example` automatically. Blank values in
development use the local API proxy and the other app's local port.

Before deployment, set these variables in each app's hosting project:

| Project root | Variable | Value |
| --- | --- | --- |
| `frontend` | `VITE_API_URL` | `https://full-stack-stock-trading-platform-js09.onrender.com` |
| `frontend` | `VITE_DASHBOARD_URL` | `https://full-stack-stock-trading-platform-five.vercel.app` |
| `dashboard` | `VITE_API_URL` | `https://full-stack-stock-trading-platform-js09.onrender.com` |
| `dashboard` | `VITE_FRONTEND_URL` | `https://full-stack-stock-trading-platform-f.vercel.app` |

Use the public production dashboard URL above. The branch URL ending in
`-git-main-prahans1.vercel.app` currently requires Vercel login and should not be used
as the redirect destination for application users.
Do not append `/api` to the backend URL or `/login` to the frontend URL.
Both projects build with `npm run build` and output to `dist`.
Both projects require their two environment variables before building.
Builds report an error if a required URL is missing or a supplied URL is not a full HTTP(S) URL.
Vite embeds these values during the build, so rebuild and redeploy after changing them.

Use the actual deployed frontend and dashboard URLs for the redirect variables.
Set `VITE_FRONTEND_URL` in the dashboard hosting project and redeploy the dashboard
to enable redirects to the frontend login page.

On the Render backend, set `FRONTEND_URL` to your deployed frontend origin,
`DASHBOARD_URL` to your deployed dashboard origin, and `NODE_ENV=production`.
Both URL variables also accept comma-separated origins if you need multiple domains.
Keep `MONGO_URL` and `TOKEN_KEY` on the backend; `VITE_*` values are public.

The exact Render URL settings for these deployments are:

```env
NODE_ENV=production
FRONTEND_URL=https://full-stack-stock-trading-platform-f.vercel.app
DASHBOARD_URL=https://full-stack-stock-trading-platform-five.vercel.app
```

Changing `backend/.env` locally does not update Render. Save these settings in Render,
keep your existing `MONGO_URL` and `TOKEN_KEY`, and redeploy the backend.
Use `backend` as the Render root directory, `npm ci` as the build command, and
`npm start` as the start command.

In Vercel, use `frontend` and `dashboard` as the respective project root directories.
Each project includes `vercel.json` rewrites so `/login`, `/signup`, and dashboard
routes load the React app when opened directly or refreshed. Redeploy both Vercel
projects after pushing the configuration files and saving their environment settings.

Verify that a request to `/api/auth/login` with the frontend's `Origin` receives
a successful CORS preflight before testing a real login. An unauthenticated GET
to `/api/auth/me` should return 401; that alone does not indicate a server failure.

---

## 4. Run the Project

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

### Dashboard

```bash
cd dashboard
npm run dev
```

---

# 📌 Current Progress

- ✅ Project Setup
- ✅ React Frontend
- ✅ Dashboard UI
- ✅ Express Server
- ✅ MongoDB Connection
- ✅ Mongoose Models
- ✅ Authentication
- ✅ JWT Cookies
- ✅ Holdings API
- ✅ Positions API
- 🚧 Orders
- 🚧 Buy & Sell Flow
- 🚧 Portfolio Analytics
- 🚧 Live Market Data

---

# 📷 Screenshots

Coming Soon...

---

# 🎯 Future Improvements

- Real-time Stock Prices
- Watchlist
- Buy/Sell Orders
- Order History
- Portfolio Analytics
- Charts
- Notifications
- Search Stocks
- Profile Settings
- Dark Mode
- Admin Dashboard

---

# 📚 What I Learned

This project helped me strengthen my understanding of:

- Full Stack Development
- REST API Design
- Express.js
- MongoDB & Mongoose
- Authentication & Authorization
- JWT
- Cookies
- React Routing
- State Management
- Backend Architecture
- Clean Project Structure

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the project and submit a pull request.

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

It helps motivate future development.

---

# 📄 License

This project is for educational purposes only.

The design is inspired by Zerodha and is **not affiliated with or endorsed by Zerodha**.
