const CREATE_USER_TABLE = `CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      firstName VARCHAR(128) NOT NULL,
      lastNAme VARCHAR(128) NOT NULL,
      email VARCHAR(128) NOT NULL UNIQUE,
      password VARCHAR(128) NOT NULL,
      createdOn TIMESTAMP
    )`;
const CREATE_ENTRY_TABLE = `CREATE TABLE IF NOT EXISTS
      entries(
        id UUID PRIMARY KEY,
        title VARCHAR(528) NOT NULL,
        description VARCHAR(1000) NOT NULL,
        email VARCHAR(128) NOT NULL,
        createdOn TIMESTAMP
      )`;
const CREATE_USER = `INSERT INTO
        users(id, firstName, lastName, email, password, createdOn)
        VALUES($1, $2, $3, $4, $5, $6)
        returning *`;
const CREATE_ENTRY = `INSERT INTO
        entries(id, title, description, email, createdOn)
        VALUES($1, $2, $3, $4, $5)
        returning *`;

const GET_USER_BY_EMAIL = "SELECT * FROM users WHERE email = $1";
const GET_ENTRY_BY_EMAIL = "SELECT * FROM entries WHERE email = $1";
const GET_ENTRY_BY_ID ="SELECT * FROM entries WHERE id=$1";
const GET_ENTRIES = "SELECT * FROM entries WHERE email=$1";
const UPDATE_ENTRIES ='UPDATE entries SET title = $2, description =$3, email =$4, createdOn=$5 WHERE id = $1'; 
const DELETE_ENTRY= 'DELETE FROM entries WHERE id = $1';

export {
  CREATE_USER_TABLE,
  CREATE_ENTRY_TABLE,
  CREATE_USER,
  CREATE_ENTRY,
  GET_USER_BY_EMAIL,
  GET_ENTRY_BY_EMAIL,
  GET_ENTRY_BY_ID,
  GET_ENTRIES,
  UPDATE_ENTRIES,
  DELETE_ENTRY
};
