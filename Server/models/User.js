/* eslint-disable no-dupe-class-members */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import password from "../helpers/password";

class User {
    constructor(){
     this.userList = [
        {
            "id":"1edfggj4j5jkgfrtees1",
            "firstName":"BYIRINGIRO",
            "lastName":"Yves",
            "email":"eric@gmail.com",
            "password":"asddfvkjkjhjhggffdds"
        },
        {
            "id":"00edf689ggjhjh87654j5jkgfrtees1",
            "firstName":"BYIRINGIRO",
            "lastName":"Stephane",
            "email":"stephane@gmail.com",
            "password":"asghfghghgfgdsfhgfftftd"
        },
        {
            "id":"0edfggj4j5jkgfrtees1",
            "firstName":"MUKUNZI",
            "lastName":"Eric",
            "email":"eric@gmail.com",
            "password":"asddfvkjkjfhghhfggtgfgd"
        },
     ]
       this.user = []
    }
    
    async addUser(user){
        if(!user){
            return false;
        }else{
            this.userList.push(user);
            return true;
        }
        
    }
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
}

 
 export default new User();