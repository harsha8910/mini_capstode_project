const Cart= require('../model/Cart')

const fetch_cart= async (req, res)=>{
    u_name=req.body.u_name
    try{
        const c=await Cart.find({u_name})
        if(c)
        {
            console.log("Products found in Cart")
            res.send(c)
        }
        else{
            console.log("Not carts found for the user")
        }
    }
    catch(error)
    {
        console.log("Error:", error)
        res.send({"Error":error})
    }
};

const insert_cart = async(req, res) => {
    const temp=new Cart({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_img: req.body.p_img,
        p_qunt: req.body.p_qunt,
        u_name: req.body.u_name})
    try{
        const saved= await temp.save()
        console.log("Cart created succesfully")
    }
    catch(error){
        console.log(error)
        res.join({"Error": error})
    }
}

const update_cart = async(req, res)=>{
    let p_id=req.body.p_id
    let u_name=req.body.u_name
    let p_qunt=req.body.p_qunt
    try{
        const saved = await Cart.updateOne({p_id, u_name}, {p_qunt})
        if(saved.modifiedCount!=0)
            {
                console.log('Cart Updated')
                res.send({'message': 'Cart Updated'})
            }
        else{
            console.log('Product Not Updated')
            res.send({'message': 'Cart not Updated'})
        }
    }
    catch(err)
    {
        console.log(err)
    }
}

const delete_cart = async(req, res)=>
    {
        let p_id=req.body.p_id
        let u_name=req.body.u_name
        try{
            const saved = await Cart.deleteOne({p_id, u_name})
            if(saved.deletedCount!=0)
                {
                    console.log('Product Deleted')
                    res.send({'message': 'Product Deleted'})
                }
            else{
                console.log('Product Not Deleted')
                res.send({'message': 'Product not Deleted'})
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }

module.exports = { fetch_cart, insert_cart, update_cart, delete_cart }