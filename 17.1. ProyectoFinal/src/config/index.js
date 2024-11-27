import { connect } from "mongoose";

const connectDB = async () => {
    try {
        await connect('mongodb+srv://gonzaalvarezporto:3498mate@cluster0.gdlaf.mongodb.net/c70125?retryWrites=true&w=majority&appName=Cluster0');
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error.message);
        process.exit(1);
    }
};

export default connectDB;