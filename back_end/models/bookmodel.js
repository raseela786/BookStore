import mongoose from "mongoose";
//giving schema name
const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:
{
    type:String,
    required:true
},

publishYear:{
    type:Number,
    required:true
}
},
{
    timestamps:true
});
//schema exporting using this name db creating
export const Book=mongoose.model('Book',bookSchema);