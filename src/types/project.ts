export interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  description?: string;
  software?: string[];
  images?: string[];
  videos?: {
    url: string;
    type: 'local' | 'youtube';
    thumbnail?: string;
  }[];
  aspectRatio?: number; // width/height
}