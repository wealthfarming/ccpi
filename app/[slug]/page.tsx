import newsData from '@/data/news.json';
import News from '@/components/news';
import { notFound } from 'next/navigation';

// Define the type for the news data
interface Post {
  id: string;
  title: string;
  slug: string;
  category: {
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  };
  description: any; // Use any for complex rich text structure
  image: {
    id: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    createdAt: string;
    updatedAt: string;
    url: string;
    thumbnailURL: string | null;
  };
  createdAt: string;
  updatedAt: string;
}

// Export generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  // Handle both single object and array cases
  if (Array.isArray(newsData)) {
    return newsData.map((post: Post) => ({
      slug: post.slug,
    }));
  }
  // Single object case
  return [{ slug: newsData.slug }];
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Type newsData as Post and check slug
  const post: Post = newsData;
  if (post.slug !== slug) {
    notFound();
  }

  return <News post={post} />;
}