'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";

const BeqTop10SportsIndex = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });

  const updateLine = () => {
    if (listRef.current) {
      const activeTab = listRef.current.querySelector('[data-state="active"]') as HTMLElement | null;
      if (activeTab) {
        const left = activeTab.offsetLeft;
        const width = activeTab.offsetWidth;
        setLineStyle({ left, width });
      }
    }
  };

  useEffect(() => {
    updateLine();
  }, []);
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
         <div 
        className="relative w-full"
        style={{
          height: "200px",
          backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2017/09/about-team-bg.jpg)",
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
        <div className="financity-blog-title-container financity-container max-w-7xl mx-auto px-4">
          <div 
            className="financity-blog-title-content financity-item-pdlr"
            style={{
              paddingTop: "400px",
              paddingBottom: "80px"
            }}
          >
            <header className="financity-single-article-head clearfix">
            </header>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-blue-600">
            <a href="https://ccpi.vn" className="hover:underline p-2 color-[#254099]">CCPI</a> &gt; 
            <a href="https://ccpi.vn/products/" className="hover:underline p-2 color-[#254099]">Products</a> &gt; <span className="text-gray-600 p-2">BEQ TOP 10 SPORTS INDEX</span>
          </nav>
        </div>
      </div>

      <div className="relative w-full" id="financity-page-wrapper">
    </div>

      {/* Main Title */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="text-4xl font-bold uppercase text-gray-900">
          BEQ TOP 10 SPORTS INDEX
        </h1>
      </div>

      {/* Tabs */}
      <Tabs 
        defaultValue="introduction" 
        className="mx-auto max-w-7xl px-4" 
        onValueChange={() => setTimeout(updateLine, 0)}
      >
        <TabsList ref={listRef} className="relative bg-white p-0 inline-flex border-b border-gray-200 pb-10 pt-10">
          <TabsTrigger
            value="introduction"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            INTRODUCTION
          </TabsTrigger>
          <TabsTrigger
            value="chart"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            CHART
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            OVERVIEW
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            PERFORMANCE
          </TabsTrigger>
          <TabsTrigger
            value="components"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            COMPONENTS
          </TabsTrigger>
          <TabsTrigger
            value="historical-data"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            HISTORICAL DATA
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            DOCUMENTS
          </TabsTrigger>
          <div 
            className="absolute bottom-0 h-[2px] bg-[#254099] transition-all duration-300"
            style={{ left: `${lineStyle.left}px`, width: `${lineStyle.width}px` }}
          />
        </TabsList>

        {/* Introduction Tab */}
        <TabsContent value="introduction" className="py-8 mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="col-span-1">
              <img
                src="https://ccpi.vn/wp-content/uploads/2025/06/top10_sport.svg"
                alt="BEQ Top 10 Sports"
                className="w-full shadow-lg"
              />
            </div>
            <div className="col-span-2 space-y-4 pl-6">
              <h2 className="text-3xl font-bold">Introduction</h2>
              <p>
                International sports events have become powerful economic engines, driving tourism, infrastructure development, and job creation. Host cities experience a surge in visitors, filling hotels, restaurants, and entertainment venues, which boosts local economies. Major tournaments like the Olympics and FIFA World Cup require extensive infrastructure investments, including stadiums, transportation systems, and digital broadcasting capabilities, leaving a lasting economic footprint. These events also create thousands of temporary and permanent jobs across industries such as hospitality, security, and media, further stimulating financial growth.
              </p>
              <p>
                From a financial perspective, international sports events generate massive revenue streams through media rights, sponsorships, and ticket sales. Broadcasting deals with global networks bring billions in revenue, while corporate sponsorships from brands like Nike, Coca-Cola, and Visa enhance profitability. The rise of sports betting and gaming has also contributed significantly to financial markets, with legalized betting generating billions in tax revenue and investment opportunities. Additionally, sports franchises and leagues see increased valuations, attracting institutional investors and private equity firms looking for long-term returns.
              </p>
              <h2 className="text-3xl font-bold">Investing in Sports</h2>
              <p>
                Investing in a Sports, and especially Sports Index, can be particularly appealing in volatile and uncertain markets because sports assets tend to be <strong>non-correlated with traditional financial markets</strong>. In the other hands:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Resilient Revenue Streams</strong>: Sports franchises generate income from media rights, sponsorships, ticket sales, and merchandise, which remain strong even during economic downturns.</li>
                <li><strong>Long-Term Growth Potential</strong>: The sports industry is expanding globally, with increasing valuations for teams and leagues, making it a high-return asset class.</li>
                <li><strong>Institutional Investment Surge</strong>: Major leagues like the NBA, NFL, and European soccer leagues have opened up to private equity, allowing investors to gain exposure to high-value sports assets.</li>
                <li><strong>Diversification Benefits</strong>: Unlike stocks or bonds, sports investments are less affected by macroeconomic trends, making them a stable hedge against market volatility.</li>
              </ul>
              <p>
                <strong>Sports equity indexes</strong> are still an emerging concept, but private equity firms and institutional investors are increasingly involved in sports-related assets. Here are some key developments:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Private Equity in Sports</strong>: Major leagues like the NBA, MLB, NHL, and MLS now allow private equity firms to own minority stakes in teams, with varying ownership limits.</li>
                <li><strong>Institutional Investment Growth</strong>: Private equity firms have poured $54.6 billion into sports investments since 2019, with valuations soaring across leagues.</li>
                <li><strong>Sports M&A Boom</strong>: The sports industry saw a 44% increase in transactions in 2024, driven by private equity interest and growing fan engagement.</li>
              </ul>
              <p>
                <strong>While there isn’t a widely recognized sports equity index like the S&P 500,</strong> investors are gaining exposure through private equity funds, media rights deals, and direct ownership stakes in teams.</p>
            </div>
          </div>
        </TabsContent>

        {/* Chart Tab */}
        <TabsContent value="chart" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/line_simple/demo@ccpr.vn:Demo2023?layout=compare&table=dbl_ind_month_chart&codes=INDBEQSPORTS10CWPRUSD,INDSPX,INDVNINDEX&start=2008"
            className="h-[590px] w-full rounded-lg border-none"
          />
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/lines_bar/demo@ccpr.vn:Demo2023?layout=excess&table=dbl_ind_month_chart&codes=INDBEQSPORTS10CWPRUSD,INDSPX&start=2019"
            className="mt-4 h-[590px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/overview/INDBEQSPORTS10CWPRUSD"
            className="h-[1500px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/performance/INDBEQSPORTS10CWPRUSD"
            className="h-[1800px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/compositions/INDBEQSPORTS10CWPRUSD"
            className="h-[290px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Historical Data Tab */}
        <TabsContent value="historical-data" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/history/INDBEQSPORTS10CWPRUSD"
            className="h-[620px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/documents/INDBEQSPORTS10CWPRUSD"
            className="h-[150px] w-full rounded-lg border-none"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BeqTop10SportsIndex;