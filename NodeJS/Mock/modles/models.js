const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Blogs = new Schema({
    name:{
        type:String
    },
    description:{
        type:String
    }
})



const Blogsmodel = mongoose.model('Blogs',Blogs);
module.exports = Blogsmodel;