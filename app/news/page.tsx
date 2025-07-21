'use client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Folder } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import newsData from "@/data/news.json";

// Hàm để trích xuất tóm tắt từ description (giả sử lấy đoạn văn đầu tiên)
function extractSummary(description: any): string {
  const firstParagraph = description.root.children.find((child: any) => child.type === "paragraph");
  return firstParagraph?.children.map((text: any) => text.text).join("") || "No summary available.";
}

export default function NewsPage() {
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
                  News
                </h1>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((post) => {
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
                    BeQ Team
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
      </div>
      <Footer />
    </div>
  );
}