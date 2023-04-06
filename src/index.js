const express = require("express");
const users = require("./v1/routes/users.js")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use("/api/v1/users", users);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
