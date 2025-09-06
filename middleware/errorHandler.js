module.exports = (err,req,res,next)=>{
    console.log(err);
    if(err.name === "ValidationError"){
        Object.values(err.errors).map(e => e.message);
        return res.status(400).json({error:"Validation failed",message});
    }
    res.status(err.status || 500).json({error: err.message || "Internal Server error"});
};