import mongoose from 'mongoose';


const connectDB=async()=>{

    mongoose.connection.on('connected',()=>{
        console.log('MongoDB connected successfully');
    })


    await mongoose.connect(`${process.env.MONGODB_URI}/bg-removal`)
}

export default connectDB;


// import mongoose from 'mongoose';

// const connectDB = async () => {
//     try {
//         const uri = process.env.MONGODB_URI;

//         if (!uri || !uri.startsWith('mongodb+srv://')) {
//             throw new Error('MongoDB URI missing or invalid. Check your .env file.');
//         }

//         await mongoose.connect(uri, {
//             serverSelectionTimeoutMS: 10000
//         });

//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection failed:', error.message);
//         throw error;
//     }
// };

// export default connectDB;