import express from 'express';

const port = 5000;
const app = express();

app.get("/", (req, res) => {
    res.send("Server is Running...!")
})

app.listen(port, () => console.log(`server is running at ${port}`))