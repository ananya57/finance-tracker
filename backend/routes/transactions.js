const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Transaction Schema
const transactionSchema = new mongoose.Schema({
  amount: Number,
  type: String,
  category: String,
  note: String,
});

const Transaction = mongoose.model("Transaction", transactionSchema);

// POST route to add transaction
router.post("/", async (req, res) => {
  try {
    const { amount, type, category, note } = req.body;
    const newTransaction = new Transaction({ amount, type, category, note });
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (err) {
    res.status(500).json({ error: "Failed to add transaction" });
  }
});

// GET route to fetch all transactions
router.get("/", async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch transactions" });
  }
});

module.exports = router;