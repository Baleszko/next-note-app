import connectDb from "../../utils/connectDb";
import noteModel from "../../models/noteModel";

export default async function addNotes(req, res) {
  await connectDb();
  const note = await noteModel.create(req.body);
  res.json({ note });
}
