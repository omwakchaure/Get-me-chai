import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    username: { type: String,required: true  },
    profilepic: { type: String },
    coverpic: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Check if model already exists to prevent overwriting
export default mongoose.models.User || model('User', UserSchema);
