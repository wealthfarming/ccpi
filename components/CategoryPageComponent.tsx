'use client';
import { Calendar, FolderSimple, PencilLine } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface BlogPost {
  title: string;
  link: string;
  image: string;
  date: string;
  dateLink: string;
  author: string;
  authorLink: string;
  category: string;
  categoryLink: string;
}

const posts: BlogPost[] = [
  {
    title: 'What Is Financial Indexing? The Finance Career Silently Powering Wall Street',
    link: '/what-is-financial-indexing-the-finance-career-silently-powering-wall-street/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '30/07/2025',
    dateLink: 'https://ccpi.vn/2025/07/30/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'How to Earn Passive Income with Just $100 Using NFT-Based Wealth Farming',
    link: '/how-to-earn-passive-income-with-just-100-using-nft-based-wealth-farming/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '24/07/2025',
    dateLink: 'https://ccpi.vn/2025/07/24/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'Common Mistakes When Investing in NFTs – And How to Avoid Them',
    link: '/common-mistakes-when-investing-in-nfts-and-how-to-avoid-them/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '16/07/2025',
    dateLink: 'https://ccpi.vn/2025/07/16/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'NFT BEQ INDEX – The Next-Gen Index Investment Certificate',
    link: '/nft-beq-index-the-next-gen-index-investment-certificate/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '11/07/2025',
    dateLink: 'https://ccpi.vn/2025/07/11/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'NFT NEC – THE NEXT-GEN INVESTMENT CERTIFICATE',
    link: '/nft-nec-the-next-gen-investment-certificate/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '25/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/25/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'Bitcoin May Rise – But NFT BEQ Index Is What Helps Me Sleep at Night',
    link: '/bitcoin-may-rise-but-nft-beq-index-is-what-helps-me-sleep-at-night/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '23/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/23/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'From Strategy to Cashflow: Decoding the Formula Behind This NFT Fund’s Success',
    link: '/from-strategy-to-cashflow-decoding-the-formula-behind-this-nft-funds-success/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '20/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/20/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'Wealth Farming Mechanism: Why You Can Earn Returns Without Monitoring the Market?',
    link: '/wealth-farming-mechanism-why-you-can-earn-returns-without-monitoring-the-market/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '19/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/19/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'The Delivery Rider and His First NFT: An Unexpected Turning Point',
    link: '/the-delivery-rider-and-his-first-nft-an-unexpected-turning-point/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '18/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/18/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
  {
    title: 'From $100 → $121: NFT NEC is doing what savings accounts can’t',
    link: '/from-100-%e2%86%92-121-nft-nec-is-doing-what-savings-accounts-cant/',
    image: 'https://ccpi.vn/wp-content/uploads/2024/12/f04c37f5d3a86ef637b9.jpg',
    date: '17/06/2025',
    dateLink: 'https://ccpi.vn/2025/06/17/',
    author: 'Thanh Tuyền',
    authorLink: 'https://ccpi.vn/author/ccpi_thanhtuyen/',
    category: 'Invest Like billionaires',
    categoryLink: 'https://ccpi.vn/category/invest-like-a-billionaire/',
  },
];

const CategoryPageComponent: React.FC = () => {
  return (
    <div className="financity-page-wrapper" id="financity-page-wrapper">
      <div className="financity-content-container financity-container">
        <div className="financity-sidebar-wrap clearfix financity-line-height-0 financity-sidebar-style-right">
          <div className="financity-sidebar-center financity-column-30 financity-line-height">
            <div className="financity-content-area">
              <div className="gdlr-core-blog-item gdlr-core-item-pdb clearfix gdlr-core-style-blog-full">
                <div className="gdlr-core-blog-item-holder gdlr-core-js-2 clearfix" data-layout="fitrows">
                  {posts.map((post, index) => (
                    <div key={index} className="gdlr-core-item-list gdlr-core-blog-full gdlr-core-item-mglr gdlr-core-style-left">
                      <div className="gdlr-core-blog-thumbnail gdlr-core-media-image gdlr-core-opacity-on-hover gdlr-core-zoom-on-hover">
                        <Link href={post.link}>
                          <Image
                            src={post.image}
                            width={960}
                            height={540}
                            alt={post.title}
                            className="object-cover"
                          />
                        </Link>
                      </div>
                      <div className="gdlr-core-blog-full-head clearfix">
                        <div className="gdlr-core-blog-full-head-right">
                          <h3 className="gdlr-core-blog-title gdlr-core-skin-title text-4xl font-bold mt-10">
                            <Link href={post.link}>{post.title}</Link>
                          </h3>
                          <div className="gdlr-core-blog-info-wrapper gdlr-core-skin-divider flex flex-row items-center gap-4 mt-2 text-[#959595]">
                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-date flex items-center gap-1">
                              <span className="gdlr-core-head">
                                <Calendar size={16} />
                              </span>
                              <Link href={post.dateLink}>{post.date}</Link>
                            </span>
                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-author flex items-center gap-1">
                              <span className="gdlr-core-head">
                                <PencilLine size={16} />
                              </span>
                              <Link href={post.authorLink} title={`Posts by ${post.author}`} rel="author">
                                {post.author}
                              </Link>
                            </span>
                            <span className="gdlr-core-blog-info gdlr-core-blog-info-font gdlr-core-skin-caption gdlr-core-blog-info-category flex items-center gap-1">
                              <span className="gdlr-core-head">
                                <FolderSimple size={16} />
                              </span>
                              <Link href={post.categoryLink} rel="tag">
                                {post.category}
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="gdlr-core-blog-content clearfix py-12">
                        <div className="clear" />
                        <Button className="gdlr-core-excerpt-read-more gdlr-core-button gdlr-core-rectangle bg-[#254099] hover:bg-[#445faa] text-white cursor-pointer transition-colors rounded-none" onClick={() => window.location.href = post.link}>
                          Read More
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Pagination className="gdlr-core-pagination gdlr-core-style-round gdlr-core-right-align gdlr-core-item-pdlr justify-end py-10">
                  <PaginationContent className="flex gap-1">
                    <PaginationItem>
                      <PaginationPrevious href="#" className="hidden" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="https://ccpi.vn/category/invest-like-a-billionaire/page/2/">
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="https://ccpi.vn/category/invest-like-a-billionaire/page/3/">
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="https://ccpi.vn/category/invest-like-a-billionaire/page/10/">
                        10
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="https://ccpi.vn/category/invest-like-a-billionaire/page/2/" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPageComponent;