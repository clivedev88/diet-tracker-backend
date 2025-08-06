import mongoose from 'mongoose';

const Mongo_URI = process.env.MONGO_URI as string || 'mongodb://localhost:27017/dietTracker';

const connectDB = async () => {
    try {
        await mongoose.connect(Mongo_URI, {});
        console.log(('Conexão com o MongoDB estabelecida com sucesso!'));
    } catch (error) {
        console.error('Erro ao conectar com o MongoDB:', error);
        
    }
}

export default connectDB;

// mongoose.connection.on('error', (err) => {
//     console.error('Erro de conexão com o MongoDB:', err);
// });