import express from 'express'

const router = express.Router();

router.get("/", (req, res) => {
    const data = { title: "Welcome to Node.js with EJS", message: "Hello, world!", message2: "This is a test from EJS" };
    res.render("index", data);
});

export default router;