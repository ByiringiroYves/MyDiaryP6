/* eslint-disable no-unused-vars */
import express from "express";
import Entry  from "./routes/Entry"
import bodyParser from "body-parser";





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', Entry);


app.listen(2000, () => {
    console.log("server is up and running on por", 2000);
})