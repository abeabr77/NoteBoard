const express = require("express")
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");
const connectDB = requre("./config/db")
const dotenv = requrie("dotenv")
dotenv.config();

const app = express();
connectDB(); // Database

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/notes", noteRoutes);

// Get test function
app.get("/", (req, res) => {
    res.send("Hello");
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); // Start server
