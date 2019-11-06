import { 
  CREATE_USER_TABLE,
  CREATE_ENTRY_TABLE 
} from '../helpers/query';
  import { Connection } from '../connection/connection';
  const pool = Connection();
  export const createTables = async () => {
    pool.connect((err) => {
      if(!err){
        console.log("Database connected");
        pool.query(CREATE_USER_TABLE);
        pool.query(CREATE_ENTRY_TABLE);
      }
    });
    return true;
  };