const express = require("express");
const cors = require('cors');
const users = require("./v1/routes/users.js")
const userInfo = require("./v1/routes/userInfo.js")

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
    origin: 'http://localhost:1420'
}));

app.use(express.json())
app.use("/api/v1/users", users);
app.use("/api/v1/userInfo", userInfo);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})
