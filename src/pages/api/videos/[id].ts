import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/mongodb';
import { Video } from '@/models/Video';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const { id } = req.query;

  try {
    await connectDB();
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({ error: 'Failed to connect to database' });
  }

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ success: false, error: 'Invalid video ID' });
  }

  switch (method) {
    case 'GET':
      try {
        const video = await Video.findById(id);
        if (!video) {
          return res.status(404).json({ success: false, error: 'Video not found' });
        }
        res.status(200).json({ success: true, data: video });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch video' });
      }
      break;

    case 'PUT':
      try {
        const video = await Video.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!video) {
          return res.status(404).json({ success: false, error: 'Video not found' });
        }
        res.status(200).json({ success: true, data: video });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to update video' });
      }
      break;

    case 'DELETE':
      try {
        const video = await Video.findByIdAndDelete(id);
        if (!video) {
          return res.status(404).json({ success: false, error: 'Video not found' });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to delete video' });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
