class Entry {
    constructor(){
     this.entries = [
       {
         id: "1e",
         title:"My Entire life",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
         "email": "byiringirbvbnvo@gmail.com"
       },
       { 
         id: "3e",
         title:"my likely products",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
         "email":"erichhjkhbv@gmail.com",
       },
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
  async getEntryPosition(id){ 
    let possition = 0;
    let ent = this.entries;
   for(let i=0; i<ent.length; i++){
    if(id == ent[i].id){
      possition = i;
      break;
    }
   }
   console.log(possition);
   return ent.splice(possition, 1).ent.push(entry);
  }
}
 export default new Entry();