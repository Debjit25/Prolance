import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
    ConversationId:{
        type:String,
        requried:true,
    },
    userId:{
        type:String,
        requried:true
    },
    desc:{
        type:String,
        requried:true
    },
},{
    timestamps:true
});

export default mongoose.model("Message",MessageSchema);