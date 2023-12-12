const { Router } = require("express");

const router = Router();

router.get("/products",getAllProducts());

router.get("/user",getUser());