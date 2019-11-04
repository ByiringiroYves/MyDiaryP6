import dotenv from 'dotenv';
import { Connection } from '../connection/connection';
const pool = Connection();
dotenv.config();
export const query = (text, params) => {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  };