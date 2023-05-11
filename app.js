const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

//setting .env file
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

//importing cookie-parser
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//importing db
require("./db/conn");

app.use(express.json());

//setting souter file
const router = require("./route/route")
app.use(router);

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html"),
        function (err) {
            res.status(500).send(err);
        }
    );
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});