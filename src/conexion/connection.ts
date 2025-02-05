import { Db, MongoClient } from "mongodb";
import { mongoConfig } from "./config";

export default function GetConnection(): { db: Db, client: MongoClient } {
    try {
        const client = new MongoClient(mongoConfig.server, mongoConfig.options);
        const db = client.db(mongoConfig.dbName);
        return { db, client };
    } catch (error) {
        console.error(error);
        throw error;
    }
}