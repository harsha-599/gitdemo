const mongoose = require('mongoose')
const userschema = new mongoose.Schema(
    {
        "firstname" : String,
        "secondname" : String,
        "mobileno" : Number, 
        "city": String,
        "email": String
        
    }
)
const collect = mongoose.model('user',userschema)
const saveuser = async(data)=>
{
    const user = new collect(data);
    const savedetails = await user.save()

    return savedetails
}

const fetchdata = async()=>
{
    const getdetail = await collect.find()
    return getdetail;
}
const updatealldetails = async(data)=>
{
    const updatebyemail = await Collect.updatemany({"email":data.email},
    {$set:
{
    "firstname" : data.firstname,
    "secondname" : data.secondname,
    "mobileno" : data.mobileno, 
    "city": data.city,
    "email": data.email
}})
return updatebyemail
}

module.exports =
{
    saveuser,
    fetchdata,
    updatealldetails
}