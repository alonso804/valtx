import app from "./app";
import "./database";

const PORT = process.env.PORT || 4000;

app.listen(PORT);

console.log(`Server listen on port ${PORT}`);
