// Create Routes
const  {Router}= require('express');
const LogEntry= require('../models/LogEntry');
const
{
    API_KEY
}=process.env

const router=Router();

router.get('/', async (req,res,next)=>{

    try{
        if(req.get('X-API-KEY')!==API_KEY){
            res.status(401);
            throw new Error('Unauthorized Access');
        }
    const entries=await LogEntry.find();
    res.json(entries);
    } catch(error){
        next(error);
    }

    /*res.json({
        message: '🎵',

    });*/
});

router.post('/',async(req,res,next)=>{
    try{
        const logEntry=new LogEntry(req.body);
        const createdEntry=await logEntry.save();
        res.json(createdEntry);
    }catch(error){
        if(error.name ==='validation error')
        {
            res.status(422);
        }

        next(error);


    }

//console.log(req.body);

});
module.exports=router;