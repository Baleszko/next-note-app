import connectDb from "../../../utils/connectDb";
import noteModel from "../../../models/noteModel";

export default async function getNotes(req, res) {
  await connectDb();
  const note = await noteModel.find();
  res.json({ note });
}
