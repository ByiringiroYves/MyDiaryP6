import {  
  CREATE_ENTRY, 
  GET_ENTRY_BY_EMAIL, 
  GET_ENTRY_BY_ID, 
  GET_ENTRIES,
  UPDATE_ENTRIES,
  DELETE_ENTRY
} from '../db/helpers/query';
import { query } from '../db/helpers/db';
class Entry {
  async addEntry(entry) {
    const values = [entry.id, entry.title, entry.description, entry.email, entry.createdOn]
    const res = await query(CREATE_ENTRY, values);
    return res.rows;
  }
  async getEntryByEmail(email) {
    const res = await query(GET_ENTRY_BY_EMAIL, [email]);
    return res.rows;
}
async findEntryById(id){
  const res = await query(GET_ENTRY_BY_ID, [id]);
  return res.rows;
} 
async getEntries(email){
  const res = await query(GET_ENTRIES, [email]);
  return res.rows
}
async updateEntry(Entry){
  const values = [Entry.id, Entry.title, Entry.description, Entry.email, Entry.createdOn]
  const res = await query(UPDATE_ENTRIES, values);
  return res.rows;
}
async removeEntry(id){
  const res = await query(DELETE_ENTRY, [id]);
  return res.rows;
}
}


    


 export default new Entry();