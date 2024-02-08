import mongoose from "mongoose";

const uri =
"mongodb+srv://shira:shira054@todolistcluster0.ghmkc1v.mongodb.net/TinyUrl?retryWrites=true&w=majority"

const isLocalhost = true
const connectDB = async () => {
    // await mongoose.connect(uri,{ ssl: true, sslValidate: false });
    await mongoose.connect(uri,{ ssl: true, sslValidate: !isLocalhost });

};
// mongoose.set('strictQuery', false)
mongoose.connection.on("connected", () => {
    console.log("mongo is connected");
    // ssl:true
    // sslValidate: false
    // sslCA: ca
});

mongoose.set('toJSON',{
    virtuals: false,
    transform: (doc,converted) => {
        delete converted._id;
    }
});

export default connectDB;