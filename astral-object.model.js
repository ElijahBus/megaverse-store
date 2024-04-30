import mongoose from 'mongoose';

const AstralObjectSchema = new mongoose.Schema({
  row: {
    type: Number,
    required: true,
  },

  column: {
    type: Number,
    required: true,
  },

  color: {
    type: String,
    required: false,
  },

  direction: {
    type: String,
    required: false,
  },
});

export const AstralObject = mongoose.model('astral_objects', AstralObjectSchema);
