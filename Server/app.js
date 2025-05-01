
import cors from "cors"
import express from "express"

//all user routes import 
import authRouter from './routes.js/userRoutes/auth.js'
import userRouter from './routes.js/userRoutes/user.js'
import restaurantRouter from './routes.js/userRoutes/restaurant.js'
import menuRouter from './routes.js/userRoutes/usermenu.js'
import cartRouter from './routes.js/userRoutes/cart.js'
import orderRouter from './routes.js/userRoutes/userorder.js'

//all admin routes import
import adminRouter from "./routes.js/adminRoutes/admin.js";
import restaurantRouter from './routes.js/adminRoutes/restaurant.js'
import menuRouter from "./routes.js/adminRoutes/menu.js"
import orderRouter from './routes.js/adminRoutes/order.js'



//start express 
const app = express()
app.use(cors())
const port = 4000 || process.env.PORT


// Routes for the user
app.use('/api/v1/user/auth', authRouter);        
app.use('/api/v1/user', userRouter);            
app.use('/api/v1/user/restaurants', restaurantRouter);  
app.use('/api/v1/user/menu', menuRouter);        
app.use('/api/v1/user/cart', cartRouter);      
app.use('/api/v1/user/order', orderRouter);     


// Routes for the admin
app.use('/api/v1/admin', adminRouter);                 
app.use('/api/v1/admin/restaurants', restaurantRouter);  
app.use('/api/v1/admin/menu', menuRouter);             
app.use('/api/v1/admin/orders', orderRouter);          







// For starting the app js 

const start = async()=>{
try {
    
    app.listen( port , ()=>{
        console.log( 'server is running on the  http://localhost:${port}...' )
    })
} catch (error) {
    console.log(error.message)
    
}
}