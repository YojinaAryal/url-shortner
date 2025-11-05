const mongooose=require("mongoose");

async function connectToMongoDB(url)
{
    return mongooose.connect(url);
}

module.exports={
    connectToMongoDB,
}