import { Pool } from 'pg';
import dotenv from 'dotenv';
import { getConnectionConfig } from './config';
dotenv.config();
const config = getConnectionConfig();
export const Connection = () => new Pool(config);
