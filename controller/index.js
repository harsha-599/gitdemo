const db = require('./service')

const registration = async(req,res)=>
{
    const registerdetail = await db.saveuser(req.body)
    res.send("register successfully")
}

const getdata = async(req,res)=>
{
    const display= await db.fetchdata()
    res.send(display)
}
const updatedetails = async(req,res)=>
{
    const update = await db.updatealldetails(req.body)
    res.send(update)
}



module.exports =
{ 
registration,
getdata,
updatedetails
}