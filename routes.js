const express = require('express');
const router = express.Router();
const { searchProducts } = require('./updateService');


// Route to update a product
router.put('/update/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!updateData) return res.status(400).json({ error: "Update data is required" });

        const updatedProduct = await updateProduct(id, updateData);
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
