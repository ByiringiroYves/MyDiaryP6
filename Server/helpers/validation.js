import joi from 'joi';
class validation {
    constructor() {
        this.validator = {
          loginSchema: joi.object().keys({
            email: joi.string().email().required(),
            password: joi.string().regex(/^[a-zA-Z]/).min(8).required(),
          }),
          userSchema: joi.object().keys({
            email: joi.string().email().required(),
            firstName: joi.string().regex(/^[a-zA-Z]/).min(1).required(),
            lastName: joi.string().regex(/^[a-zA-Z]/).min(1).required(),
            password: joi.string().regex(/^[a-zA-Z]/).min(8).required(),
          }),
          Entrychema: joi.object().keys({
            title: joi.string().required(),
            description: joi.string().required(),
          }),
   }
  }
}  
export default new validation();  