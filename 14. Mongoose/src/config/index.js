const { connect } =  require("mongoose");

module.exports.connectDB = async () => {
    console.log('base de datos conectada');

    return await connect('mongodb+srv://gonzaalvarezporto:3498mate@cluster0.gdlaf.mongodb.net/c70125?retryWrites=true&w=majority&appName=Cluster0')
}