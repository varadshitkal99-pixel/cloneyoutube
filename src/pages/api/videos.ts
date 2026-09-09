import type { NextApiRequest, NextApiResponse } from 'next';
import { connectDB } from '@/lib/mongodb';
import { Video } from '@/models/Video';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  try {
    await connectDB();
  } catch (error) {
    console.error('Database connection error:', error);
    return res.status(500).json({ error: 'Failed to connect to database' });
  }

  switch (method) {
    case 'GET':
      try {
        const videos = await Video.find({}).sort({ createdAt: -1 });
        res.status(200).json({ success: true, data: videos });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to fetch videos' });
      }
      break;

    case 'POST':
      try {
        const video = await Video.create(req.body);
        res.status(201).json({ success: true, data: video });
      } catch (error) {
        res.status(400).json({ success: false, error: 'Failed to create video' });
      }
      break;

    default:
      res.status(405).json({ success: false, error: 'Method not allowed' });
      break;
  }
}
