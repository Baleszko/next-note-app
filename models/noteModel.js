import mongoose, { Schema, model, models } from "mongoose";

const noteSchema = new mongoose.Schema({
  title: String,
  body: String,
});

const noteModel = models.noteModel || model("noteModel", noteSchema);

export default noteModel;
