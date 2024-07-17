// arifraj9911
// HDHvbV5DnIGJdxzW
const { MongoClient, ServerApiVersion } = require("mongodb");

let db;

export const connectDB = async () => {
  if (db) return db;
  try {
    const uri =
      "mongodb+srv://arifraj9911:HDHvbV5DnIGJdxzW@cluster0.anhjcto.mongodb.net/?appName=Cluster0";
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    db = client.db("next-user-data");
  } catch (error) {
    console.log(error);
  }
};
