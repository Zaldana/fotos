import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { GalleryImage, GalleryCategory, ImageMetadata } from '@/types/gallery';

const GALLERY_BASE_PATH = path.join(process.cwd(), 'public', 'gallery');
const SUPPORTED_IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Get all images from a specific gallery category
 */
export function getGalleryImages(category: GalleryCategory): GalleryImage[] {
  const galleryPath = path.join(GALLERY_BASE_PATH, category);
  
  // Check if directory exists
  if (!fs.existsSync(galleryPath)) {
    return [];
  }

  const files = fs.readdirSync(galleryPath);
  const images: GalleryImage[] = [];

  // Find all image files
  const imageFiles = files.filter(file => 
    SUPPORTED_IMAGE_EXTENSIONS.some(ext => 
      file.toLowerCase().endsWith(ext)
    )
  );

  for (const imageFile of imageFiles) {
    const imagePath = path.join(galleryPath, imageFile);
    const imageUrl = `/gallery/${category}/${imageFile}`;
    
    // Look for corresponding metadata file
    const baseName = path.parse(imageFile).name;
    const metadataFile = `${baseName}.md`;
    const metadataPath = path.join(galleryPath, metadataFile);
    
    let metadata: ImageMetadata = {};
    let content = '';
    
    // Parse metadata if file exists
    if (fs.existsSync(metadataPath)) {
      try {
        const metadataContent = fs.readFileSync(metadataPath, 'utf-8');
        const parsed = matter(metadataContent);
        metadata = parsed.data as ImageMetadata;
        content = parsed.content.trim();
      } catch (error) {
        console.warn(`Error parsing metadata for ${imageFile}:`, error);
      }
    }

    images.push({
      id: `${category}-${baseName}`,
      filename: imageFile,
      path: imagePath,
      url: imageUrl,
      metadata,
      content: content || undefined,
    });
  }

  // Sort by date (newest first) or filename if no date
  return images.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0);
    const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0);
    
    if (dateA.getTime() === dateB.getTime()) {
      return a.filename.localeCompare(b.filename);
    }
    
    return dateB.getTime() - dateA.getTime();
  });
}

/**
 * Get all gallery categories that have images
 */
export function getAvailableCategories(): GalleryCategory[] {
  const categories: GalleryCategory[] = [];
  
  if (!fs.existsSync(GALLERY_BASE_PATH)) {
    return categories;
  }

  const dirs = fs.readdirSync(GALLERY_BASE_PATH, { withFileTypes: true });
  
  for (const dir of dirs) {
    if (dir.isDirectory() && (dir.name === 'nature' || dir.name === 'travel')) {
      const galleryImages = getGalleryImages(dir.name as GalleryCategory);
      if (galleryImages.length > 0) {
        categories.push(dir.name as GalleryCategory);
      }
    }
  }
  
  return categories;
}

/**
 * Get featured images across all categories
 */
export function getFeaturedImages(): GalleryImage[] {
  const categories = getAvailableCategories();
  const allImages: GalleryImage[] = [];
  
  for (const category of categories) {
    const images = getGalleryImages(category);
    const featuredImages = images.filter(img => img.metadata.featured);
    allImages.push(...featuredImages);
  }
  
  // Sort by date
  return allImages.sort((a, b) => {
    const dateA = a.metadata.date ? new Date(a.metadata.date) : new Date(0);
    const dateB = b.metadata.date ? new Date(b.metadata.date) : new Date(0);
    return dateB.getTime() - dateA.getTime();
  });
}