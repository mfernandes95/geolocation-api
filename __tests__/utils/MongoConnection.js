import mongoose from "mongoose";

export default async function MongoConnection(mongoUrl) {
  return await mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
}
