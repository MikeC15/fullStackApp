const mongoose = require("mongoose")
const connectionString = "mongodb://localhost/show";

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on("error", ()=>{
    console.log(`mongoose is listening to ${connectionString}`)
})
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected`);
});
mongoose.connection.on('error', (err) => {
    console.log(err, 'mongoose error');
});