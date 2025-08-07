import mongoose from "mongoose";
type ConnectionObject = {
  isConnected?: number;
};
const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    console.log("MongoDB connection readyState:", connection.isConnected);

    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGO_URI! || "", {});
    console.log(db);
    connection.isConnected = db.connections[0].readyState;
    console.log("db connected");
  } catch (err) {
    console.log("connection failed", err);
    process.exit(1);
  }
}

export default dbConnect;
