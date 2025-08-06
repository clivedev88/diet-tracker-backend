import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI  as string, {
            userNewUrlParser: true,
            userUnifiedTopology: true,
        });
        console.log('Connexão com o MongoDB estabelecida com sucesso!');        
    } catch (error) {
        console.error('Erro ao conectar com o MongoDB', error);
        process.exit(1); // Encerra o processo se a conexão falhar        
    }
}

export default connectDB;