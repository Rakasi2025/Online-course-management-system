const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files from public folder
app.use(express.static("public"));

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "barbie2002",
  database: "ocms"
});

// Connect to DB
db.connect((err) => {
  if (err) {
    console.error("❌ MySQL Error:", err.message);
  } else {
    console.log("✅ MySQL Connected");
  }
});

// Test route
app.get("/", (req, res) => {
  res.send("OCMS Backend is Working 🚀");
});

// REGISTER ROUTE
app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.send("All fields are required");
  }

  const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, password], (err) => {
    if (err) {
      console.error(err);
      return res.send("Registration failed ❌");
    }

    res.send("Registered successfully ✅");
  });
});

// COURSES ROUTE
app.get("/courses", (req, res) => {
  db.query("SELECT * FROM courses", (err, data) => {
    if (err) return res.send(err);

    res.json(data);
  });
});

// START SERVER
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});

