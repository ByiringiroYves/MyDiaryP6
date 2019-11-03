import dotenv from 'dotenv';
dotenv.config();
const environment = process.env.NODE_ENV || 'development';
const development = {
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'myDiary',
  };
const test = {
    connectionString: process.env.TEST_DATABASE_URL,
  };
const production = {
    connectionString: process.env.DATABASE_URL,
};
export const getConnectionConfig = () => (environment == 'development' ? development : environment == 'test' ?  test : production);

