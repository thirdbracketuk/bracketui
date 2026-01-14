# Vercel Blob & Neon DB Setup Guide

## Environment Variables

Add these to your `.env.local` file:

```env
# Neon Database
DATABASE_URL=postgresql://user:password@host/database

# Vercel Blob (automatically set by Vercel)
BLOB_READ_WRITE_TOKEN=your_token_here
```

## Neon Database Setup

1. Create a Neon account at https://neon.tech
2. Create a new project and database
3. Copy the connection string and set it as `DATABASE_URL`
4. Use the provided query builder or SQL clients to create tables

### Example: Create a Users Table

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
```

## Vercel Blob Setup

1. Go to your Vercel project dashboard
2. Navigate to Settings > Environment Variables
3. The `BLOB_READ_WRITE_TOKEN` will be automatically generated
4. Access Blob through the Vercel dashboard or API

## Usage Examples

### Neon Database

```typescript
import { getUsers, runQuery } from '@/lib/neon';

// Get all users
const users = await getUsers();

// Custom query
const result = await runQuery(
  'SELECT * FROM users WHERE email = $1',
  ['user@example.com']
);
```

### Vercel Blob

```typescript
import { uploadBlob, listBlobs, deleteBlob } from '@/lib/blob';

// Upload a file
const blob = await uploadBlob('image.jpg', file);

// List all files
const files = await listBlobs();

// Delete a file
await deleteBlob(blob.url);
```

## API Routes

### Upload Endpoint

POST `/api/upload` - Upload files to Vercel Blob

```bash
curl -X POST http://localhost:3001/api/upload \
  -F "file=@image.jpg"
```

Response:
```json
{
  "url": "https://...",
  "downloadUrl": "https://...",
  "pathname": "image.jpg",
  "contentType": "image/jpeg",
  "contentDisposition": "attachment; filename=\"image.jpg\""
}
```

## Vercel Production Setup

1. Neon connections are automatically handled by Vercel
2. Blob storage is automatically configured
3. Environment variables are set in Vercel dashboard
4. No additional setup needed on deployment

## Best Practices

### Database
- Use connection pooling with Neon
- Create appropriate indexes for frequently queried columns
- Use parameterized queries to prevent SQL injection
- Monitor database performance in Neon dashboard

### Blob Storage
- Use meaningful filenames with timestamps
- Set appropriate cache headers for your use case
- Delete unused files to manage storage costs
- Use object prefixes to organize files logically

## Monitoring

- **Neon**: Monitor usage in Neon dashboard (neon.tech)
- **Vercel Blob**: Check storage usage in Vercel dashboard
- **Logs**: View application logs in Vercel dashboard

## Troubleshooting

### Database Connection Issues
```bash
# Test connection locally
psql $DATABASE_URL
```

### Blob Upload Fails
- Check `BLOB_READ_WRITE_TOKEN` is set
- Ensure file size is within limits
- Verify network connectivity

## Documentation Links
- [Neon Documentation](https://neon.tech/docs)
- [Vercel Blob Documentation](https://vercel.com/docs/storage/vercel-blob)
- [Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
