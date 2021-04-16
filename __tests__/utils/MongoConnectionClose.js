import mongoose from "mongoose";

export default async function MongoConnectionClose() {
  return await mongoose.connection.close();
}
