const Product = require('./productModel');

// Function to update a product
async function updateProduct(productId, updateData) {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, updateData, { new: true });

        if (!updatedProduct) {
            return { error: "Product not found" };
        }
        
        return updatedProduct;
    } catch (error) {
        throw new Error("Error updating product: " + error.message);
    }
}

module.exports = { updateProduct };
