import mongoose from 'mongoose';
import { oilsList } from '../utils/index.js';

const RecipeSchema = new mongoose.Schema(
   {
      title: {
         type: String,
         required: [true, 'Favor proveer un titulo.'],
         minlength: 10,
         maxlength: 150,
      },
      problem: {
         type: [String],
         default: ['general'],
         trim: true,
         required: true,
      },
      oils: {
         type: [String],
         enum: oilsList,
         trim: true,
         default: 'digize pal Adri',
      },
      desc: {
         type: String,
         required: [true, 'Favor proveer una descripción'],
         minlength: 10,
         maxlength: 1500,
      },
      createdBy: {
         type: mongoose.Types.ObjectId,
         ref: 'User',
         required: [true, 'Please provide user'],
      },
   },
   { timestamps: true }
);

export default mongoose.model('Recipe', RecipeSchema);

// los required q tienen default es para q al crear o modificar nome pacen vacios
