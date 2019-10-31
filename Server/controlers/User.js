import moment from 'moment';
import uuidv4 from 'uuid/v4';
import UserModel from '../models/User';
import AuthCheck from '../middleware/AuthCheck';
import helpers from '../helpers/password';
import validation from '../helpers/validation';
import dotenv from 'dotenv';
import joi from 'joi';
dotenv.config();
class User {
   static async createUser(req, res){
    joi.validate(req.body, validation.validator.userSchema).then((result) => {
              UserModel.getUserByEmail(req.body.email).then((user) => {
                 if(user){
                    res.status(400).json({
                        "status": 400,
                        "error" : "USER ALREAD EXIST"
                    });
                 }else{
                    helpers.hashPassword(req.body.password).then((pwd) => {
                        const user = {
                            id : uuidv4(),
                            firstName : req.body.firstName,
                            lastName : req.body.lastName,
                            password : pwd,
                            email : req.body.email,
                            createdOn : moment(new Date())
                        }
                        UserModel.addUser(user);
                        AuthCheck.generateToken(user).then((token) => {
                              return res.status(201).json({
                                  "status" : 201,
                                  "message": "User created successefully",
                                  "data":{
                                      "token":token
                                  
                              },
                                  
                              });
                          });
                      }); 
                  }
              });
         }).catch(error => res.send({
             "status": 400,
             "error" : {"message": error.details[0].message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}
         }));
}
static async login(req, res){
    joi.validate(req.body, validation.validator.loginSchema).then((result)=> {
      UserModel.getUserByEmail(req.body.email).then((user)=>{
            if(!user){
              return res.status(401).json({
                 status: 401,
                 error: "User is not Exist"     
              }); 
            }else{
            helpers.isCorrectPassword(req.body.password,user.password).then((result) => {
               if(!result){
                   return res.status(400).json({
                      status: 400,
                      error: "invalid password"     
                  })     
               }else{
            AuthCheck.generateToken(user).then((token) => {
            return res.status(200).send({
               status: 200,
               data : {
                    token: token,
               }    
             })
            })          
          }
         })   
       }   
    } )     
 }).catch(error => res.send({
     "status": 400,
     "error" : {"message": error.details[0].message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}
 }));
    
}  
}

export default User; 
