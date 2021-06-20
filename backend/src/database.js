import mongoose from "mongoose";

mongoose
  .connect(`${process.env.MONGO_URL_DEV}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));