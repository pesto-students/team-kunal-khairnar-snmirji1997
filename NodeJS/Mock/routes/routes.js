const express = require('express');
const router = express.Router();
const controller = require("../controllers/controller")
// import {controller} from "../controllers/controller"

router.get('./get',async (req,res)=>{
    const data = await controller.get();
    res.status(200).json({data:data});
})

router.post('/create',async (req,res)=>{
    try {
        const reqBody = req.body;
        const create = await controller.create(reqBody);
        res.status(200).json({data:"Data Inserted"})
    } catch (error) {
        res.json({error:error});
    }
   

})


router.post('./update',async (req,res) =>{
    try {

        const reqBody = req.body
        const update = await controller.update(reqBody);
        res.status(200).json({data:"Data updated"})

        
    } catch (error) {
        res.json({error:error});
        
    }
})


router.post('./delete' , async (req,res) => {
    try {
        const id = req.body.id;
        const deleteData = await controller.deleteById(id)
        res.status(200).json({data:"Data deleted"})

        
    } catch (error) {
        res.json({error:error})
    }
})

module.exports = router;



