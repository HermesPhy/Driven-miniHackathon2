import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config();

let db = null;
const client = new MongoClient(process.env.MONGO_URI);

try {
    await client.connect();
    db = client.db("hackathon");
} catch (error) {
    console.log(chalk.bold.red("error to connect", error));
}

export default db;