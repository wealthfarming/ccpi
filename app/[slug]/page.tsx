import newsData from '@/data/news.json';
import News from '@/components/news';
import { notFound } from 'next/navigation';

// Define the type for the news data
interface Post {
  id: string;
  title: string;
  slug: string;
  category: Array<{
    id: string;
    title: string;
    createdAt: string;
    updatedAt: string;
  }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

// Explicitly type newsData as an array of Post
const typedNewsData: Post[] = newsData;

// Export generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return typedNewsData.map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  // Find the post with the matching slug
  const post = typedNewsData.find((p: Post) => p.slug === slug);

  // If no post is found, return 404
  if (!post) {
    notFound();
  }

  return <News post={post} />;
}