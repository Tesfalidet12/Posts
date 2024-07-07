// using a commojs module
// const express = require("express");
// es module
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./route/posts.js";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";
// import { fileURLToPath } from "url";
const app = express();
const PORT = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.get("/", (req, res) => {
//   res.send({
//     message: "Hello There",
//   });
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

//sendFile()
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });
// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//we can easily setup static middleware

app.use(express.static(path.join(__dirname, "public")));
//Logger
app.use(logger);
//Route
app.use("/api/posts", posts);

//Error Handler
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server rining on port ${PORT}`);
});
