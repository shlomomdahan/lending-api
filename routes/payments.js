const express = require("express");
const router = express.Router();
const pool = require("../db");
const axios = require("axios");

router.post("/", async (req, res) => {
  console.log("Testing payments route");
  //   const { loanId, amount } = req.body;

  //   if (!loanId || !amount) {
  //     return res
  //       .status(400)
  //       .json({ error: "Missing or invalid required fields" });
  //   }

  // create an auth token

  try {
    // create an auth token
    // const authTokenResponse = await axios.post(
    //   `${process.env.UNRELIABLE_PAYMENTS_API_URL}/auth-tokens`,
    //   {}, // empty body
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    console.log("authToken", authTokenResponse.data);
    res.json(authTokenResponse.data);
  } catch (error) {
    console.error(
      "Error getting auth token:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({ error: "Failed to get auth token" });
  }
});

module.exports = router;
