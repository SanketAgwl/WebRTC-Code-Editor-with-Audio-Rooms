require("dotenv").config();

const DBConnect = require("./database");
const express = require("express");
const cors = require("cors");
const app = express();
const cookieParser = require("cookie-parser");

const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};
app.use(cors(corsOption));
app.use(cookieParser());
app.use("/storage", express.static("storage"));
const PORT = process.env.PORT || 5500;
DBConnect();
const router = require("./routes");

app.use(express.json({ limit: "8mb" }));
app.use(router);
app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));

app.get("/", (req, res) => {
  res.send("Hello from express Js");
});
