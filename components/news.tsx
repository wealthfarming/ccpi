'use client';

import { useEffect, useState } from 'react';
import { RichText } from '@payloadcms/richtext-lexical/react';
import { getCustomRichTextConverters } from '@/components/rich-text/custom-rich-text-converters';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import CallToActionSection from './CallToActionSection';
import BottomNavigation from './BottomNavigation';
import { useTranslation } from 'react-i18next';
import { toast } from "sonner";

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

interface Props {
  postsByLanguage: { [key: string]: Post | null };
}

export default function News({ postsByLanguage }: Props) {
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);
  const [post, setPost] = useState<Post>(postsByLanguage.en!);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const selectedPost = postsByLanguage[i18n.language] || postsByLanguage.en;
    if (selectedPost) {
      setPost(selectedPost);
    } else {
      console.warn(`${t("post_not_found")} ${i18n.language}`);
      setPost(postsByLanguage.en!);
      toast.error(t("post_not_found"));
    }
  }, [isClient, i18n.language, postsByLanguage, t]);

  if (!isClient) return null;

  return (
    <div className="bg-white">
      <Header />
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center h-64"
          style={{ backgroundImage: `url(${post.image.url})` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-white text-center">{post.title}</h1>
          </div>
        </div>

        {/* Breadcrumbs */}
        <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-blue-600">
            <a href="https://ccpi.vn" className="hover:underline p-2 color-[#254099]">CCPI</a>
            &gt; <a href={`https://ccpi.vn/category/${post.category[0].title.toLowerCase().replace(/\s+/g, '-')}`} className="hover:underline">{post.category[0].title}</a> &gt;<span className="text-gray-600 p-2">{post.title}</span>
          </nav>
        </div>
      </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto prose prose-lg mt-10 mb-10">
          <RichText
            data={post.description}
            converters={({ defaultConverters }: any) =>
              getCustomRichTextConverters(defaultConverters)
            }
          />
        </div>
      <CallToActionSection/>
      <BottomNavigation/>
      <Footer />
    </div>
  );
}