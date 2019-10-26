class Entry {
    constructor(){
     this.entries = [
       {
         id: "1e",
         title:"My Entire life",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
         email: "byiringirbvbnvo@gmail.com"
       },
       { 
         id: "3e",
         title:"my likely products",
         description:"in my life i was strongly affected by ambitions of being a famous electronician",
         email: "eric@gmail.com"
       },
     ]
    }

    addNewEntry(entry){
      this.entries.push(entry);
      // console.log(entry);
      return entry;
    }
    async getEntries(email){
      return this.entries.filter((entry) => entry.email === email);
    }
   findEntry(title){
     return this.entries.find((entry) => entry.title === title);
   }
   findEntryById(id){
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
  async modifyEntry(){
    let modifyentry = [req.body];
    this.entries.forEach(element => {
      if(element.id !== id){
        modifyentry.push(element);
      }
    }); 
    this.entries = modifyentry; 
    return modifyentry;
  }
 }
 export default new Entry();