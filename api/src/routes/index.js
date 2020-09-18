const { Router } =require ("express");
const router = Router();

router.get("/", (req,res)=>{
    res.json({
        'Tittle': 'Hola mundo'
    })
})


module.exports = router;