const express = require("express");
const router = express.Router();
const axios = require("axios");
const https = require("https");

const agent = new https.Agent({
  rejectUnauthorized: false,
});

router.post("/", async (req, res) => {
  console.log("Testing payments route");

  try {
    console.log("Attempting to get auth token...");
    const authTokenResponse = await axios.post(
      "https://unreliable-payments-wappznbt3q-uc.a.run.app/auth-tokens",
      {},
      {
        headers: {
          "Content-Type": "application/json",
        },
        httpsAgent: agent,
      }
    );

    console.log("Full response:", authTokenResponse);
    console.log("Response data:", authTokenResponse.data);
    console.log("Response status:", authTokenResponse.status);

    res.json(authTokenResponse.data);
  } catch (error) {
    console.error("Full error object:", error);
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    res.status(500).json({ error: "Failed to get auth token" });
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const pool = require("../db");
// const axios = require("axios");

// router.post("/", async (req, res) => {
//   console.log("Testing payments route");
//   //   const { loanId, amount } = req.body;

//   //   if (!loanId || !amount) {
//   //     return res
//   //       .status(400)
//   //       .json({ error: "Missing or invalid required fields" });
//   //   }

//   // create an auth token

//   try {
//     // create an auth token
//     // const authTokenResponse = await axios.post(
//     //   `${process.env.UNRELIABLE_PAYMENTS_API_URL}/auth-tokens`,
//     //   {}, // empty body
//     //   {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //   }
//     // );

//     console.log("authToken", authTokenResponse.data);
//     res.json(authTokenResponse.data);
//   } catch (error) {
//     console.error(
//       "Error getting auth token:",
//       error.response ? error.response.data : error.message
//     );
//     res.status(500).json({ error: "Failed to get auth token" });
//   }
// });

// module.exports = router;
