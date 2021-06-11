import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost/valtx", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
