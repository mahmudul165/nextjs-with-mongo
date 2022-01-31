import { connectToDatabase } from "../../lib/mongodb";
export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
};
// MONGODB_URI=mongodb+srv://test:<password>@cluster0.alf4l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// MONGODB_DB=sample_mflix
