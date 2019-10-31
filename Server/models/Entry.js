import { updateLocale } from "moment";

class Entry {
    constructor(){
     this.entries = [
       {
         
        "id": "cedcb35f-6618-4a86-ab68-6cf92c0b8577",
        "title": "my",
        "description": "during ngjhgkhj;ljk;luioy",
        "email": "erich@gmail.com",
        "UpdatedOn": "2019-10-31T19:04:55.649Z"
       },
       { 
         id: "3e",
         title:"my likely products",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
         "email":"erichhjkhbv@gmail.com",
       },
       {
       "title": "my life gjvugyugyugtug",
            "description": "during the day vghcfyctfcf",
            "email": "erich@gmail.com",
            "createdOn": "2019-10-31T19:03:49.915Z",
            "id": "cedcb35f-6618-4a86-ab68-6cf92c0b8577"
        }   
     ]
    }

    async addNewEntry(entry){
      this.entries.push(entry);
      return entry;
    }
    async getEntries(email){
      return  this.entries.filter((entry) => entry.email === email);
     
    }
    async findEntry(parseInt){
      return this.entries.find((entry)=> entry.id === parseInt(req.params.id, 10));
    }
   async findEntryById(id){
       return this.entries.find((entry) => entry.id === id);
   } 

   async removeEntry(id){
    let newEntries = []
    this.entries.forEach(element => {
      if(element.id !== id){
        newEntries.push(element);
      }
    });
    this.entries = newEntries;
    return newEntries;
  }
  async getEntryPosition(id, email){
    
    let possition = 0;
    let ent = await this.getEntries(email); 
   for(let i=0; i<ent.length; i++){
    if(id === ent[i].id){  
        possition = i;
        break;
    }
   }
   return possition
   
  }
  async updateEntry(id, email,Modify){ 
    console.log(id, email);
    const poss = this.getEntryPosition(id, email);
    return this.entries.splice(poss, 1,              Modify);
    }
}  


 export default new Entry();