import { configDotenv } from "dotenv";
configDotenv();

import app from "./src/app.js";
import { connectToDB } from "./src/config/db.config.js";

app.listen(3000, async () => {
    await connectToDB();
    console.log("server listening on port 3000");
})
