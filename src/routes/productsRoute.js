const express=require("express")
const product=require("../controllers/productController")
const tryCatchMiddleware=require("../middlewares/tryCatch")
const router=express.Router()



router.post("/addproduct",tryCatchMiddleware(product.addProduct))
router.get("/getproduct",tryCatchMiddleware(product.getProducts))
router.get("/product/:id",product.getProductById)



module.exports=router