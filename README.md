
#  Workout Planner using MERN Stack

##  Description

The **Workout Planner** is a full-stack fitness management web app built with the **MERN (MongoDB, Express, React, Node.js)** stack.
It helps users create, track, and manage daily **workouts** and **meal plans**, promoting consistent healthy habits.

The backend follows the **MVC architecture**, and the frontend uses the **React Context API** for centralized state management.

---

##  Features

* **User Authentication:** Secure signup/login using **JWT** and cookies.
* **Custom Routines:** Full **CRUD** (Create, Read, Update, Delete) for workouts.
* **Meal Plans:** Full **CRUD** for meal tracking (recipes, time, and category).
* **Daily Entries:** Log workouts/meals for any date using saved templates.
* **Password Encryption:** All passwords hashed via **bcryptjs**.

---

## Tech Stack

### Backend (Node.js / Express.js)

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via **Mongoose**)
* **Auth & Security:** `jsonwebtoken`, `bcryptjs`, `cookie-parser`, `helmet`, `cors`
* **Utilities:** `dotenv`, `morgan`, `nodemon`

### Frontend (ReactJS)

* **Library:** ReactJS
* **State Management:** React Context API
* **Routing:** `react-router-dom`
* **HTTP Client:** `axios`
* **UI & Icons:** `@fortawesome/react-fontawesome`, `@fortawesome/free-solid-svg-icons`

---

## Getting Started

### 1. Clone the Repository

```bash
# Clone the project
git clone https://github.com/your-username/workout_planner_1.git

# Navigate into the project directory
cd workout-planner
```

---

### 2. Backend Setup

```bash
# Navigate to backend folder
cd server

# Install dependencies
npm install
```

#### Create a `.env` file inside `/server` and add:

```env
# MongoDB Connection String (from MongoDB Atlas or local)
MONGO=[your_mongodb_connection_string]

# JWT Secret Key (use a strong random string)
JWT=[your_jwt_secret_key]

# Server Port
PORT=5000

# Frontend URL (e.g., for local React dev server)
FRONTEND_URL=http://localhost:5173
```

#### Run the Backend:

```bash
# Development mode
npm run dev

# Or standard mode
node index.js
```

Your backend should now be running on **[http://localhost:5000](http://localhost:5000)**

---

###  3. Frontend Setup

```bash
# Go back to the root directory
cd ..

# Navigate to the React app
cd client

# Install dependencies
npm install
```

#### Run the Frontend:

```bash
npm run dev
```

Your React frontend should now be running on **[http://localhost:5173](http://localhost:5173)**

---

### 4. Folder Structure

```
workout-planner/
│
├── server/                  # Backend (Express + MongoDB)
│   ├── models/              # Mongoose schemas
│   ├── controllers/         # MVC controllers
│   ├── routes/              # API routes
│   ├── utils/               # Error handling
│   ├── index.js             # Entry point
│   └── .env                 # Environment config
│
└── client/                  # Frontend (React)
    ├── src/
    │   ├── components/      # UI components
    │   ├── pages/           # Page components
    │   ├── authContex.jsx         
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## Environment Variables Summary

| Variable       | Description                       | Example                                          |
| -------------- | --------------------------------- | ------------------------------------------------ |
| `MONGO`        | MongoDB connection string         | `mongodb+srv://user:pass@cluster.mongodb.net/db` |
| `JWT`          | Secret key for JWT authentication | `supersecretkey123`                              |
| `PORT`         | Backend server port               | `2000`                                           |
| `FRONTEND_URL` | URL of frontend                   | `http://localhost:3000`                          |

---

##  Scripts Summary

### Backend (from `/server`):

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm run dev`   | Start the backend with Nodemon (auto reload) |
| `node index.js` | Start backend normally                       |

### Frontend (from `/client`):

| Command         | Description                |
| --------------- | -------------------------- |
| `npm run dev`     | Start the React dev server |

---

## 🧭 Development Flow

1. Start **MongoDB** (local or Atlas).
2. Run the **backend** (`npm run dev` in `/server`).
3. Run the **frontend** (`npm run dev` in `/client`).

---

## 🔮 Future Enhancements

* Progress charts and analytics
* Nutrition API integration
* Social sharing and comparison features
* Mobile app version using React Native

---

## 🏁 Conclusion

The **Workout Planner** demonstrates a scalable and secure **MERN stack** implementation for personal fitness management. It’s a strong foundation for developers building health or productivity apps with user-centric features.
