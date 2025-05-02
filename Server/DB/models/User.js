import bcrypt from './../node_modules/bcryptjs/index.d';
import { Schema, model } from 'mongoose';


const UserSchema=new Schema({
    name:{type: String, required:[true, "Name is required"]},
    email:{type: String, required:[true, "Email is required"], unique: true},
    password:{type:String, required : [true, "Password is required"]},
    isAdmin: {type:Boolean , default:false }
})

UserSchema.pre('save', async function () {
    if(!this.isModified('password')) return;
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password , salt);
})



export default model('User', UserSchema);