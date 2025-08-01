'use client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Calendar, User, Folder } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import EnPostData from '@/data/news/english.json';
import ViPostData from '@/data/news/vietnamese.json';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";

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

const postsByLanguage: { [key: string]: Post[] | null } = {
    en: EnPostData,
    vi: ViPostData,
};

// Hàm để trích xuất tóm tắt từ description (giả sử lấy đoạn văn đầu tiên)
function extractSummary(description: any): string {
  const firstParagraph = description.root.children.find((child: any) => child.type === "paragraph");
  return firstParagraph?.children.map((text: any) => text.text).join("") || "No summary available.";
}

export default function NewsPage() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<Post[]>(postsByLanguage.en!);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const selectedPosts = postsByLanguage[i18n.language] || postsByLanguage.en;
    if (selectedPosts) {
      setPosts(selectedPosts);
      setCurrentPage(1); // Reset to first page when language changes
    } else {
      console.warn(`${t("post_not_found")} ${i18n.language}`);
      setPosts(postsByLanguage.en!);
      // toast.error(t("post_not_found"));
    }
  }, [i18n.language, t]);

  // Calculate pagination
  const totalPosts = posts.length;
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      {/* Page Title Section */}
      <div className="relative w-full" id="financity-page-wrapper">
        <div 
          className="relative w-full"
          style={{
            height: "304px",
            backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
          }}
        >
          {/* Header transparent substitute */}
          <div className="financity-header-transparent-substitute"></div>
          
          {/* Top overlay */}
          <div className="financity-blog-title-top-overlay"></div>
          
          {/* Main overlay */}
          <div className="financity-blog-title-overlay absolute inset-0"></div>
          
          {/* Bottom overlay */}
          <div className="financity-blog-title-bottom-overlay"></div>
          
          {/* Content container */}
          <div className="financity-blog-title-container financity-container max-w-7xl mx-auto px-4 h-full">
            <div 
              className="financity-blog-title-content financity-item-pdlr h-full flex items-center justify-center"
            >
              <header className="financity-single-article-head clearfix">
                <div className="financity-single-article-head-right">
                  <h1 
                    className="text-center financity-single-article-title text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                    style={{
                      textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                    }}
                  >
                    {t("news")}
                  </h1>
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentPosts.map((post) => {
            const summary = extractSummary(post.description);
            const formattedDate = format(new Date(post.createdAt), "dd/MM/yyyy");

            return (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow gap-0 py-0">
                <CardHeader className="p-0">
                  <Link href={`/${post.slug}`}>
                    <Image
                      src={post.image.url}
                      alt={post.title}
                      width={700}
                      height={660}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="mr-2" size={16} />
                    {formattedDate}
                  </div>
                  <CardTitle className="text-xl font-semibold mb-2">
                    <Link href={`/${post.slug}`} className="hover:text-blue-600">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">
                    {summary}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-4 border-t flex justify-between items-center text-sm text-gray-500">
                  <div className="flex items-center">
                    <User className="mr-2" size={16} />
                    {t("beq_team")}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Folder className="mr-2" size={16} />
                    {post.category.map((cat) => (
                      <Badge key={cat.id} variant="secondary" className="text-xs">
                        {cat.title}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                {Array.from({ length: totalPages }, (_, index) => (
                  <PaginationItem key={index + 1}>
                    <PaginationLink
                      onClick={() => handlePageChange(index + 1)}
                      isActive={currentPage === index + 1}
                      className="cursor-pointer"
                    >
                      {index + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}