import mongoose, { Document, Schema } from 'mongoose';

export interface IVideo extends Document {
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  duration?: number;
  views?: number;
  createdAt: Date;
  updatedAt: Date;
}

const VideoSchema: Schema<IVideo> = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    thumbnail: { type: String },
    duration: { type: Number },
    views: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const Video = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);
