const mongoose=require("mongoose");

async function connectToMongoDB(url)
{
    return mongoose.connect(uri=url);
}

module.exports={
    connectToMongoDB,
}