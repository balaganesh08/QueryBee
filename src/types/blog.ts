
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  authorTitle?: string;
  category: string;
  tags?: string[];
  imageSrc?: string;
}
