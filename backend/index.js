const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(express.json());
app.use(cors({origin: true}));

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.post("/authenticate", async (req, res) => {
    const {username} = req.body;

    try {
        const response = await axios.put(
            'https://api.chatengine.io/users/',
            {username: username, secret: username, first_name: username},
            {headers: {"private-key": "3398713d-8008-4d50-bf28-8e373f14ccb7", timeout: 10000}}
        )
        return res.status(response.status).json(response.data)

    } catch (e) {
        if (e.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            res.status(e.response.status).json(e.response.data);
        } else if (e.request) {
            // The request was made but no response was received
            res.status(500).json({message: "No response from server", error: e.message});
        } else {
            // Something happened in setting up the request that triggered an Error
            res.status(500).json({message: "Error setting up request", error: e.message});
        }
    }
    return res.json({username: username, secret: "sha256..."});
});

app.listen(3001, () => {
    console.log('Server running on http://localhost:3001/');
});