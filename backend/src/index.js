import app from "./app";
import "./database";

app.listen(process.env.SERVER_PORT);

console.log(`Server listen on port ${process.env.SERVER_PORT}`);
