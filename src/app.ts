// Suggested code may be subject to a license. Learn more: ~LicenseLog:645786644.
import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    res.json({ message: "Hello, World!" });
});

export default app;
