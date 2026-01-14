// lib/blob.ts
import { put, del, list, head } from '@vercel/blob';

/**
 * Upload a file to Vercel Blob
 */
export async function uploadBlob(
  filename: string,
  file: Blob | Buffer,
  options?: { contentType?: string; cacheControlMaxAge?: number }
) {
  try {
    const blob = await put(filename, file, {
      access: 'public',
      contentType: options?.contentType,
      cacheControlMaxAge: options?.cacheControlMaxAge || 3600,
    });
    return blob;
  } catch (error) {
    console.error('Blob upload error:', error);
    throw error;
  }
}

/**
 * Delete a file from Vercel Blob
 */
export async function deleteBlob(url: string) {
  try {
    await del(url);
  } catch (error) {
    console.error('Blob deletion error:', error);
    throw error;
  }
}

/**
 * List all files in Vercel Blob
 */
export async function listBlobs(prefix?: string) {
  try {
    const { blobs } = await list({ prefix });
    return blobs;
  } catch (error) {
    console.error('Blob listing error:', error);
    throw error;
  }
}

/**
 * Get metadata of a file in Vercel Blob
 */
export async function getBlobMetadata(url: string) {
  try {
    const metadata = await head(url);
    return metadata;
  } catch (error) {
    console.error('Blob metadata error:', error);
    throw error;
  }
}
