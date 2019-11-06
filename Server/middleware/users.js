import validation from "../helpers/validation";
import dotenv from "dotenv";
import joi from "joi";
dotenv.config();

class User {
  static async Signupvalid(req, res, next) {
    joi
      .validate(req.body, validation.validator.userSchema)
      .then(result => {
        next();
      })
      .catch(error =>
        res.send({
          status: 400,
          error: {
            message: error.details[0].message.replace(
              /[&\/\\#,+()$~%.'":*?<>{}]/g,
              ""
            )
          }
        })
      );
  }  
  static async Signinvalid(req, res, next) {
    joi
      .validate(req.body, validation.validator.loginSchema)
      .then(result => {
        next();
      })
      .catch(error =>
        res.send({
          status: 400,
          error: {
            message: error.details[0].message.replace(
              /[&\/\\#,+()$~%.'":*?<>{}]/g,
              ""
            )
          }
        })
      );
  } 
  }
export default User;
