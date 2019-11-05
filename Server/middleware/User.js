import UserModel from "../models/User";
import helpers from "../helpers/password";

class User {
  static async userNotExists(req, res, next) {
    const { email } = req.body;
    const user = await UserModel.getUserByEmail(email);
    if (user.length > 0) {
      res.status(400).json({
        status: 400,
        error: {
          message: "Email is already exists"
        }
      });
    }
    next();
  }
  static async userExists(req, res, next) {
    const { email } = req.body;
    const user = await UserModel.getUserByEmail(email).then(user => {
      if (!user[0]) {
        res.status(404).json({
          status: 404,
          error: {
            message: "User is not exists"
          }
        });
      } else {
        helpers
          .isCorrectPassword(req.body.password, user[0].password)
          .then(result => {
            if (!result) {
              return res.status(400).json({
                status: 400,
                error: "invalid password"
              });
            }
          });
      }
    });

    next();
  }
}

export default User;
