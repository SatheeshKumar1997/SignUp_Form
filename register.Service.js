const mongo = require("../Shared/mongo.Shared");
const schema = require("../Shared/schema");

const services = {
    async register(data,res){
       //Validation
        try {
        const {error} = schema.register.validate(data);
        if(error){
            return res.status(400).send({error : error.details[0].message});
        } 

        //Email validation
        const user = await this.findMyEmail(data.Email);
        console.log(user.Email);
        if(user) return res.send({message : "Email already exists"});
       
        await mongo.db.collection("signup").insertOne({data});
        res.send("Posted");
    }
 catch(err){
    console.status(500).log({error:"internal server error"});
}
},
findMyEmail(Email) {
   return mongo.db.collection("signup").findOne({Email});
   }
};

module.exports = services;