const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const goods = require("./routes/goods");
const mypage = require("./routes/mypage");
const user = require("./routes/user");
const home = require("./routes/home");
const app = express();
const port = 4000;

app.use(cookieParser());
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/home", home);
app.use("/user", user);
app.use("/mypage", mypage);
app.use("/goods", goods);

app.listen(port, () => {
  console.log("Server is listening to Port 4000");
});

module.exports = app;
