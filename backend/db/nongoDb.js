import { config } from 'dotenv';
import { MongoClient } from 'mongodb';
config()

const connection = new MongoClient(process.env.MONGO_URL);
export default connection


