// import newsData from '@/data/news.json';
import News from '@/components/news';
import { notFound } from 'next/navigation';
import EnPostData from '@/data/news/english.json';
import ViPostData from '@/data/news/vietnamese.json'

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

// Export generateStaticParams for static site generation
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return (EnPostData as Post[]).map((post: Post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const enPost = (EnPostData as Post[]).find((p: Post) => p.slug === slug) || null;
  const viPost = (ViPostData as Post[]).find((p: Post) => p.slug === slug) || null;

  if (!enPost) {
    notFound();
  }

  const postsByLanguage: { [key: string]: Post | null } = {
    en: enPost,
    vi: viPost,
  };

  return <News postsByLanguage={postsByLanguage} />;
}