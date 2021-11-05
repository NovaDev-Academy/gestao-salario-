import * as mongoose from 'mongoose';

export const Jobschema = new mongoose.Schema({
  title: String,
  salary: Number,
});
