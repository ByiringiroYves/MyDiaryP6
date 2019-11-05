const CREATE_USER_TABLE = `
DROP TABLE IF EXISTS users,
CREATE TABLE IF NOT EXISTS
    users(
      id UUID PRIMARY KEY,
      firstName VARCHAR(128) NOT NULL,
      lastNAme VARCHAR(128) NOT NULL,
      email VARCHAR(128) UNIQUE NOT NULL,
      password VARCHAR(128) NOT NULL,
      createdOn TIMESTAMP
    )`;
const CREATE_USER = `INSERT INTO
        users(id, firstName, lastName, email, password, createdOn)
        VALUES($1, $2, $3, $4, $5, $6)
        returning *`;
const GET_USER_BY_EMAIL = "SELECT * FROM users WHERE email = $1";

       
export { 
  CREATE_USER_TABLE, 
  CREATE_USER, 
  GET_USER_BY_EMAIL
};
