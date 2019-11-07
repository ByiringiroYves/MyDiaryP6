import validation from "../helpers/validation";
import dotenv from "dotenv";
import joi from "joi";
dotenv.config();

class Entry {
  static async EntryValid(req, res, next) {
    joi
      .validate(req.body, validation.validator.Entrychema)
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
export default Entry;
