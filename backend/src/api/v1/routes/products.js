const router = require('express').Router();
const { addProduct } = require('../product/controller');
const { addProductValidator } = require('../product/validator');
const validationResult = require('../validators');

router.post('/', addProductValidator, validationResult, addProduct);

module.exports = router;
