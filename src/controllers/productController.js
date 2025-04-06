import productsSchema from "../model/productsSchema.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productsSchema.find();

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.log(error)
  }
};
const getProductsById = async (req, res) => {
  try {
    const {pId} = req.body;
    const products = await productsSchema.findById(pId);

    if(!products){
        res.status(200).json({
            message:"not found"
        })
    }

    res.status(200).json({
      data: products,
    });
  } catch (error) {
    console.log(error)
  }
};

export { getAllProducts,getProductsById };
