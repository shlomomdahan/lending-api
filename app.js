const express = require("express");
const app = express();
const { verifyConnection } = require("./db");
const port = 3000;

const signersRoutes = require("./routes/signers");
const loansRoutes = require("./routes/loans");
const paymentsRoutes = require("./routes/payments");

app.use(express.json());

app.use("/signers", signersRoutes);
app.use("/loans", loansRoutes);
app.use("/payments", paymentsRoutes);

const startServer = async () => {
  await verifyConnection();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
};

startServer();

// Test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Gynger Lending API" });
});
