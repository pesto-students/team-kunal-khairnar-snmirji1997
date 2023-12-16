// import {Blogsmodel} from '../modles/models'
const Blogsmodel = require('../modles/models')
const mongoose = require('mongoose')


const get = async ()=>{
    const data = Blogsmodel.find();
    return data

}

const create = async (data) =>{

const insert  = await Blogsmodel.insertMany(data);
return insert
}

const update = async (data) =>{
        const update = await Blogsmodel.findByIdAndUpdate(data.id,{$set:data})

        return update
}

const deleteById = async (id) =>{
    const remove = await Blogsmodel.findByIdAndRemove(id);
    return remove


}


module.exports = {create,update,get,deleteById}