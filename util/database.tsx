import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://admin:1234@cluster0.xvah96o.mongodb.net/forum?retryWrites=true&w=majority&appName=AtlasApp";

let connectDB: any;

if (process.env.NODE_ENV === "development") {
  console.log(global._mongo);
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
