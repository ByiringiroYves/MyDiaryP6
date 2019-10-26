/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import password from "../helpers/password";

class User {
    constructor(){
     this.userList = [
    //     {
    //         "FirstName": "byiringiro yves",
    //         "LastName": "yves",
    //         "email": "ericRukundo@gmail.com",
    //         "hashPassword": "$2b$06$Wu8cr2FE/KvEmrXjn.h1ieSIHuiC0tjua2MCAaSB4inkHf8G3P.M6"
    //     },
    //   {
    //         "FirstName":"byiringiro yves",
    //         "LastName": "yves",
    //         "email":"eric@gmail.com",
    //         "password":"asnggfghdszxvddbfbrgfsdgf"
    //     },
    //   {
    //         "FirstName": "Aluwarenzi",
    //         "LastName": "Augustin",
    //         "email": "augustin250@gmail.com",
    //         "hashPassword": "$2b$06$fPP3hzWhgrjmZX5VUxvXpeGt/.fgyuxJ78ptPPa5Lh6Tp0l1yE9au"
    //     },
     ]
    //   this.user = []
    }
    
//    addNewUser(user){
//      // console.log(user);
//       this.users.push(user);
//       return user;
//     }
    async addUser(user){
        if(!user){
            return false;
        }else{
            this.userList.push(user);
            return true;
        }
    }
//    getUsers(){
//       return this.users;
//     }
async getUserByEmail(email){
    return this.userList.find((user) => user.email === email);
   }
   async getUserIdByEmail(email){
    let user = this.userList.find((user) => user.email === email)
    return !user ? null : user.id;
}
async getUserById(id){
    return this.userList.find((user) => user.id === id)
}   
//    async findUser(email){
//        let user = this.userList.find((user) => user.email === email)
//        return !user ? null : user;
//    }
}

 
 export default new User();