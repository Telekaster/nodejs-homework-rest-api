const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");
const filesRouter = require("./routes/api/files");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);
app.use(express.static("public"));
app.use("/api/files", filesRouter);

module.exports = app;
