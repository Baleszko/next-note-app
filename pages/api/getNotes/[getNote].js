import connectDb from "../../../utils/connectDb";
import noteModel from "../../../models/noteModel";

export default async function getNote(req, res) {
  await connectDb();
  console.log(req.query);
  const { id } = req.query;
  console.log(id);
  const note = await noteModel.findById(id);
  res.json({ note });
}
