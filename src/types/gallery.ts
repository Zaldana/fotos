export interface ImageMetadata {
  title?: string;
  description?: string;
  date?: string;
  tags?: string[];
  featured?: boolean;
}

export interface GalleryImage {
  id: string;
  filename: string;
  path: string;
  url: string;
  metadata: ImageMetadata;
  content?: string; // Optional longer description from markdown content
}

export type GalleryCategory = 'nature' | 'travel';