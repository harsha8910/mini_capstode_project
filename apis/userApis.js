const User = require('../model/User')

const fetch_user= async(req, res) => {
    try{
        const users = await User.find()
        if(users)
        {
            console.log("Users Found")
            res.send(users)
        }
        else{
            console.log("No users found")
        }
        // console.log('Data sent')
        // res.json(users)
    }
    catch(err){
        console.log('Fetch error :- ', err)
        res.send({ 'message': err })
    }
}

const insert_user= async(req, res) => {
    const temp=new User({
        u_id: req.body.u_id,
        u_name: req.body.u_name,
        u_pwd: req.body.u_pwd,
        u_email: req.body.u_email,
        u_addr: req.body.u_addr,
        u_contact: req.body.u_contact
        })

        try {
            const savedUser = await temp.save()
            console.log('User signed up success')
            res.send(savedUser)
            }
            catch (error) {
            res.status(400).send(error)
            }
            
}

const auth_user= async(req, res) => {
    u_name = req.body.u_name
    u_pwd = req.body.u_pwd
    try{
        const user1= await User.findOne({u_name})
        if(user1){
            console.log('User Found',user1)
            if(user1.u_pwd == u_pwd){
                console.log('Login Success')
                res.send({ 'message': 'Login Success' })
            }
            else{
                console.log(user1.u_pwd)
                console.log(u_pwd)
                console.log('Password Incorrect')
                res.send({ 'message': 'Password Incorrect' })
            }
        }
        else{
            res.join({'message':'Incorrect User Name'})
            console.log("Incorrect User Name")
        }
    }
    catch(err)
    {
        console.log('Fetch error :- ', err)
        res.send({ 'message': err })
    }
}

module.exports= {fetch_user, auth_user, insert_user}