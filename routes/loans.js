const express = require("express");
const router = express.Router();
const pool = require("../db");

router.post("/", async (req, res) => {
  const { principalAmount, feeAmount, isActive, signerIds } = req.body;

  if (!principalAmount || !feeAmount || !Array.isArray(signerIds)) {
    return res
      .status(400)
      .json({ error: "Missing or invalid required fields" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO loans (principal_amount, fee_amount, is_active, signer_ids) VALUES ($1, $2, $3, $4) RETURNING *",
      [principalAmount, feeAmount, isActive !== false, signerIds]
    );

    console.log(`Loan created with ID: ${result.rows[0].id}`);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error creating loan:", err);
    res
      .status(500)
      .json({ error: "An error occurred while creating the loan." });
  }
});

module.exports = router;
