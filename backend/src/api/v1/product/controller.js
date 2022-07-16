const { addProductService } = require('./service');

exports.addProduct = async (req, res) => {
  const { status, code, message, data } = await addProductService({
    ...req.body,
    body: req.body,
    userId: req.user._id,
  });
  res.status(code).json({ code, status, message, data });
};
