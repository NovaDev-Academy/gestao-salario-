import * as mongoose from 'mongoose';

export const  BonusSchema = new mongoose.Schema({
    valorSalary: Number,
    descricao: String,
    percentagem: Number,
    codigoAnual: Number, 
});