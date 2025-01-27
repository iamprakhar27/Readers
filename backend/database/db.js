
import mongoose from "mongoose";

const connectdb = async(username,password) =>{
    const url = `mongodb+srv://${username}:${password}@cluster0.49xlw76.mongodb.net/bloggingapp`
    try{
        const connectionobject = await mongoose.connect(`${url}`)
        console.log("connection established with database");
    }
    catch(error)
    {
        console.log("error" + error);
    }
}
export default connectdb
