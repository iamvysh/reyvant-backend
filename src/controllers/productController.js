const products=require("../models/productModel")


const addProduct=async(req,res)=>{
    
    const product=new products(req.body)
    await product.save()
    res.status(200).json({

        message:"product added succesfully"
    }
    )
}

const getProducts=async(req,res)=>{

    const {sortBy,sortType,searchQuery}=req.query
    console.log(req.query)
    const sort = {};
    sort[sortBy] = sortType === '1' ? 1 : -1; 

    const Products=await products.find({
      ...  searchQuery && {title:{$regex:searchQuery,$options:"i"}}
    })
    .sort(sort);
    // .sort({[sortBy]:[sortType]})
    // .sort({title:-1})
    
    res.status(200).json({
        message:"data fetched succeesfully",
        data:Products
    })
}

const getProductById=async(req,res)=>{
    console.log(req.params.id);
    const Product=await products.findById(req.params.id)
    // console.log(Product);

    res.status(200).json({
        message:"Success",
        data:Product
    })
}







module.exports={addProduct,getProducts,getProductById}