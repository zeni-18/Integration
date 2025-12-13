const express = require("express");
const { getProduct } = require("../controller/productController");
const { postProduct } = require("../controller/productController");
const { deleteProduct } = require("../controller/productController");
const { updateProduct } = require("../controller/productController");
const router = express.Router();

router.get("/Product",getProduct);
router.post("/postProduct",postProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.put("/updateProduct/:id", updateProduct);

module.exports = router;