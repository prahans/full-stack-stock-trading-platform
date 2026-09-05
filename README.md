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
| `frontend` | `VITE_DASHBOARD_URL` | Your deployed dashboard origin, e.g. `https://dashboard.example.com` |
| `dashboard` | `VITE_API_URL` | `https://full-stack-stock-trading-platform-js09.onrender.com` |
| `dashboard` | `VITE_FRONTEND_URL` | Optional until the frontend is deployed; then use its actual origin |

Replace the example frontend and dashboard domains with your actual deployments.
Do not append `/api` to the backend URL or `/login` to the frontend URL.
Both projects build with `npm run build` and output to `dist`.
The frontend requires both variables; the dashboard requires only `VITE_API_URL`.
Builds report an error if a required URL is missing or a supplied URL is not a full HTTP(S) URL.
Vite embeds these values during the build, so rebuild and redeploy after changing them.

Deploy the backend first, then the dashboard with only `VITE_API_URL`.
Deploy the frontend with `VITE_API_URL` and the real `VITE_DASHBOARD_URL`.
Finally, add the real `VITE_FRONTEND_URL` to the dashboard and redeploy it.
Until then, unauthenticated dashboard visitors see a sign-in unavailable message;
login redirects are disabled. No placeholder frontend URL is needed.

On the Render backend, set `FRONTEND_URL` to your deployed frontend origin,
`DASHBOARD_URL` to your deployed dashboard origin, and `NODE_ENV=production`.
Both URL variables also accept comma-separated origins if you need multiple domains.
Keep `MONGO_URL` and `TOKEN_KEY` on the backend; `VITE_*` values are public.

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
