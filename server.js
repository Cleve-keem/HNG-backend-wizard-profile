const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require("dotenv");

const server = express();
server.use(express.json());
dotenv.config();
server.use(cors());

const PORT = process.env.PORT || 5000;

server.get("/me", async (req, res) => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000,
    });
    const catFact = response.data?.fact || "No fact found";

    // send info to server
    res.status(200).json({
      status: "success",
      user: {
        email: process.env.USER_EMAIL || "hakeembello983@gmail.com",
        name: process.env.USER_NAME || "Hakeem Bello",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: catFact,
    });
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);
    // Fallback fetch
    res.status(200).json({
      status: "success",
      user: {
        email: process.env.USER_EMAIL || "hakeembello983@gmail.com",
        name: process.env.USER_NAME || "Hakeem Bello",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact: "Failed to fetch cat fact",
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
