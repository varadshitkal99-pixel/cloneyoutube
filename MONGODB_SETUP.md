# MongoDB Backend Setup for YourTube

This project now includes a MongoDB backend using Mongoose ODM.

## What Was Added

### 1. Dependencies
- `mongoose` - MongoDB Object Data Modeling library
- `mongodb` - MongoDB native driver

### 2. Database Connection (`src/lib/mongodb.ts`)
A connection utility that:
- Connects to MongoDB using the `MONGODB_URI` environment variable
- Implements connection caching for Next.js hot reload
- Prevents multiple connections in development mode

### 3. Models (`src/models/`)

#### Video Model (`src/models/Video.ts`)
```typescript
{
  title: string (required),
  description: string (required),
  url: string (required),
  thumbnail?: string,
  duration?: number,
  views: number (default: 0),
  createdAt: Date,
  updatedAt: Date
}
```

#### User Model (`src/models/User.ts`)
```typescript
{
  username: string (required, unique),
  email: string (required, unique),
  password: string (required),
  avatar?: string,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. API Routes (`src/pages/api/`)

#### Videos Collection API (`/api/videos`)
- **GET** - Fetch all videos
- **POST** - Create a new video

#### Single Video API (`/api/videos/[id]`)
- **GET** - Fetch a single video by ID
- **PUT** - Update a video by ID
- **DELETE** - Delete a video by ID

## Setup Instructions

### 1. Install MongoDB

**Option A: Local Installation**
- Download from [mongodb.com](https://www.mongodb.com/try/download/community)
- Start MongoDB service: `sudo systemctl start mongod` (Linux) or via MongoDB Compass

**Option B: MongoDB Atlas (Cloud)**
- Visit [cloud.mongodb.com](https://cloud.mongodb.com)
- Create a free cluster
- Get your connection string

### 2. Configure Environment Variables

Create or update `.env.local`:

```env
MONGODB_URI=mongodb://localhost:27017/yotube
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/yotube?retryWrites=true&w=majority
```

### 3. Run the Development Server

```bash
npm run dev
```

## API Usage Examples

### Get All Videos
```bash
curl http://localhost:3000/api/videos
```

### Create a Video
```bash
curl -X POST http://localhost:3000/api/videos \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Video",
    "description": "Video description",
    "url": "https://example.com/video.mp4",
    "thumbnail": "https://example.com/thumb.jpg",
    "duration": 120
  }'
```

### Get a Single Video
```bash
curl http://localhost:3000/api/videos/<VIDEO_ID>
```

### Update a Video
```bash
curl -X PUT http://localhost:3000/api/videos/<VIDEO_ID> \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Updated Title",
    "views": 100
  }'
```

### Delete a Video
```bash
curl -X DELETE http://localhost:3000/api/videos/<VIDEO_ID>
```

## Response Format

All API responses follow this format:

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": "Error message"
}
```

## Notes

- The database connection is automatically established when you make your first API call
- In development, the connection is cached to prevent multiple connections during hot reloads
- Make sure MongoDB is running before starting the development server
- For production, use MongoDB Atlas or a managed MongoDB service
