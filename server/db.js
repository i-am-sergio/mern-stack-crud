import moongose from "mongoose";
import { MONGODB_URI } from "./config.js";

export async function connectDB() {
  try {
    moongose.set("strictQuery", true);
    const db = await moongose.connect(MONGODB_URI);
    console.log(`Connected to database: ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
}
