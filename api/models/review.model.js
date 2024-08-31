import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewSchema = new Schema({
    gigId:{
        type:String,
        requried:true
    },
    userId:{
        type:String,
        requried:true
    },
    star:{
        type:Number,
        requried:true,
    },
    desc:{
        type:String,
        requried:true
    },
},{
    timestamps:true
});

export default mongoose.model("Review",ReviewSchema);