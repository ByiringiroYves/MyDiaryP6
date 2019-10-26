/* eslint-disable no-unused-vars */
import express from "express";
import User  from "./routes/User";
import Entry from "./routes/Entry";
import bodyParser from "body-parser";
const port = 50900;





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', User);
app.use('/', Entry);

app.listen(port, () => {
    console.log("server is up and running on port", port);
})
