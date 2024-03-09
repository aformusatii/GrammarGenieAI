import express from "express";
import OpenAIService from "./src/OpenAIService.js"

const app = express();

const openAiService = new OpenAIService();

// Middleware to parse JSON bodies
app.use(express.json());

app.use(express.static('static'));

app.post("/text/correction", async (req, res) => {
    if (req.body.userText) {
        const responseText = await openAiService.askGhatGPT(req.body.userText);
        res.json({ok: true, responseText: responseText});
    } else {
        res.json({ok: false});
    }
});

app.listen(30100, () => {
    console.log("Server running on port 30100");
});