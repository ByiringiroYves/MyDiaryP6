import express from "express";
import User  from "./routes/User";
import Entry from "./routes/Entry";
import bodyParser from "body-parser";
const PORT = 50900;





const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));
app.use('/', User);
app.use('/', Entry);

const server = (port = '') => app.listen(port || PORT, () => {});
server();
export default server;