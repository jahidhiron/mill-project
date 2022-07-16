const { Product, Category } = require('../models');

exports.addProductService = async ({ category, body, userId }) => {
  const response = {
    code: 201,
    status: 'success',
    message: 'Product added successfully',
  };

  try {
    const isCategoryExist = await Category.findById(category);
    if (!isCategoryExist) {
      response.code = 404;
      response.status = 'failed';
      response.message = 'No category data found by id';
      return response;
    }

    const newProduct = new Product({
      ...body,
      userId,
    });
    await newProduct.save();
    return response;
  } catch (error) {
    response.code = 500;
    response.status = 'failed';
    response.message = 'Error. Try again';
    return response;
  }
};
