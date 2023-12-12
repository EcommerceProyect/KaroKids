const { Router } = require("express");
const { getProducts } = require("../handlers/getProducts");

const router = Router();

router.get("/",(req,res) => {
    res.status(200).json({ message: "peticion get de ejemplo" });
})

router.get("/products",getProducts);

// router.get("/user",getUser());


module.exports = router;