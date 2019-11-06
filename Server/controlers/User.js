import moment from "moment";
import uuidv4 from "uuid/v4";
import UserModel from "../models/User";
import AuthCheck from "../middleware/AuthCheck";
import helpers from "../helpers/password";
import dotenv from "dotenv";
dotenv.config();
class User {
  static async createUser(req, res) {
    helpers.hashPassword(req.body.password).then(async pwd => {
      const user = {
        id: uuidv4(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: pwd,
        email: req.body.email,
        createdOn: moment(new Date())
      };
      const responce = await UserModel.addUser(user);
      AuthCheck.generateToken(user).then(token => {
        return res.status(201).json({
          status: 201,
          message: "User created successefully",
          user: responce
        });
      });
    });
  }
  static async login(req, res) {
    UserModel.getUserByEmail(req.body.email).then(user => {
      helpers
        .isCorrectPassword(req.body.password, user[0].password)
        .then(result => {
          AuthCheck.generateToken(user).then(token => {
            return res.status(200).send({
              status: 200,
              data: {
                token: token
              }
            });
          });
        });
    });
  }
}

export default User;
