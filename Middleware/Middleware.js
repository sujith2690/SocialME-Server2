
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()
const authMiddleWare = async(req,res,next)=>{
    try {
        const secret = process.env.JWT_KEY;
        const token = req.headers.authorization.split(" ")[1];
        console.log('token --exist -- at authmiddleware')
        if(token){
            const decoded = jwt.verify(token, secret)
            // req.body._id = decoded?.id;
            req.userId = decoded?.id;
        }
        next();
     } catch (error) {
         console.log(error,'-----authMiddleWare')
    }

}


export default authMiddleWare;