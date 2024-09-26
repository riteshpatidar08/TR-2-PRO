const Product = require('./../models/productModel');

exports.createProduct = async (req, res, next) => {
  try {
    console.log(req.file);
    const { name, price, description, stock, category, discountPercentage } =
      req.body;
    const image = req.file.path;

    const product = await Product.create({
      name,
      price,
      description,
      stock,
      category,
      discountPercentage,
      image,
    });
    if (product) {
      res.status(201).json({
        message: 'success',
      });
    }
  } catch (error) {
    next(error);
  }
};


exports.getProduct = async(req,res)=>{
try {
    const product = await Product.find();
    if(product){
        res.status(200).json({
            length : product.length,
            product
        })
    }
} catch (error) {
    next(eror)
}
}