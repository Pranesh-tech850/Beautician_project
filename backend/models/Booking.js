import mongoose from "mongoose";

const bookingSchema = mongoose.Schema(
{
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service",
        required:true
    },

    appointmentDate:{
        type:Date,
        required:true
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Approved",
            "Completed",
            "Cancelled"
        ],
        default:"Pending"
    }
},
{
    timestamps:true
}
);

export default mongoose.model("Booking", bookingSchema);