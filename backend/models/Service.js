import mongoose from "mongoose";

const serviceSchema = mongoose.Schema(
{
    name:{
        type:String,
        required:true
        
    },

    description:String,

    price:{
        type:Number,
        required:true
    },

    duration:String,

    image:String
},
{
    timestamps:true
}
);

export default mongoose.model("Service", serviceSchema);