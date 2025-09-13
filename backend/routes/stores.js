// routes/stores.js
const express = require("express");
const router = express.Router();
const pool = require("../db");
const auth = require("../middleware/auth");

// 🔹 List stores with avg rating + current user's rating
router.get("/", auth, async (req, res) => {
  try {
    const search = req.query.search ? `%${req.query.search}%` : "%";
    const [rows] = await pool.query(
      `SELECT 
          s.id,
          s.name,
          s.address,
          COALESCE( (SELECT AVG(r.rating) FROM ratings r WHERE r.store_id = s.id), 0 ) AS avg_rating,
          (SELECT r2.rating FROM ratings r2 WHERE r2.store_id = s.id AND r2.user_id = ?) AS user_rating
        FROM stores s
        WHERE s.name LIKE ? OR s.address LIKE ?
        ORDER BY s.name ASC`,
      [req.user.id, search, search]
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch stores" });
  }
});

// 🔹 Submit or update rating for a store
router.post("/:id/rate", auth, async (req, res) => {
  try {
    const storeId = req.params.id;
    const { rating, comment } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    await pool.query(
      `INSERT INTO ratings (user_id, store_id, rating, comment)
       VALUES (?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE rating = VALUES(rating), comment = VALUES(comment), updated_at = CURRENT_TIMESTAMP`,
      [req.user.id, storeId, rating, comment || null]
    );

    res.json({ message: "Rating submitted" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to submit rating" });
  }
});

module.exports = router;
