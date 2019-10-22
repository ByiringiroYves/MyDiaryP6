class Entry {
    constructor(){
     this.users = [
       {
         title:"My Entire life",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
       },
       { 
         title:"my likely products",
       description:"in my life i was strongly affected by ambitions of being a famous electronician",
       },
     ]
    }
   addNewUser(user){
      console.log(user);
      this.users.push(user);
      return this;
    }
   getusers(){
      return this.users;
    }
   finduser(title){
     return this.users.find((user) => user.title === title);
   }
 }
 
 export default new Entry();