require("dotenv").config();
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// Allowed frontend origins
const allowedOrigins = [
  "http://localhost:3000",
  "https://vsinfotech.ca",
  "https://www.vsinfotech.ca"
];

// ✅ Setup CORS middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true); // allow non-browser requests (like curl)
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization"]
}));

// Debug incoming Origin
app.use((req, res, next) => {
  console.log("Incoming Origin:", req.headers.origin);
  next();
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);

// Catch 404
app.use(function (req, res, next) {
  res.status(404).json({ error: "Not Found" });
});

// Error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    error: err.message,
    stack: req.app.get("env") === "development" ? err.stack : {}
  });
});

module.exports = app;

