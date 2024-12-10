const adminErr = (err, req,res, next) => {
    if(err){
        res.send("Something went wrong.");
    }
}

module.exports = { adminErr }