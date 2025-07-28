'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const BeqTop5ExchangesIndex = () => {
  const listRef = useRef<HTMLDivElement>(null);
  const [lineStyle, setLineStyle] = useState<{ left: number; width: number }>({ left: 0, width: 0 });
  const { t } = useTranslation()

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
            <a href="https://ccpi.vn/products/" className="hover:underline p-2 color-[#254099]">Products</a> &gt; <span className="text-gray-600 p-2">BEQ TOP 5 EXCHANGES INDEX</span>
          </nav>
        </div>
      </div>

      <div className="relative w-full" id="financity-page-wrapper">
    </div>

      {/* Main Title */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="text-4xl font-bold uppercase text-gray-900">
          BEQ TOP 5 EXCHANGES INDEX
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
            {t("introduction")}
          </TabsTrigger>
          <TabsTrigger
            value="chart"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("chart")}
          </TabsTrigger>
          <TabsTrigger
            value="overview"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("overview")}
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("performance")}
          </TabsTrigger>
          <TabsTrigger
            value="components"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("components")}
          </TabsTrigger>
          <TabsTrigger
            value="historical-data"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("his-data")}
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="cursor-pointer px-4 py-2 text-lg font-bold uppercase text-[#1e73be] data-[state=active]:bg-white data-[state=active]:text-[#254099] data-[state=active]:shadow-none"
          >
            {t("documents")}
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
                src="https://ccpi.vn/wp-content/uploads/2025/05/Your-paragraph-text-1.svg"
                alt="Stock chart"
                className="w-full shadow-lg"
              />
            </div>
            <div className="col-span-2 space-y-4 pl-6">
              <h2 className="text-3xl font-bold">Introduction</h2>
              <p>
                Exchanges are often thought of as platforms that facilitate the buying and selling of securities, but some of the world’s largest exchanges are publicly traded companies themselves. These exchanges operate as profit-driven entities, generating revenue from trading fees, listing charges, market data sales, and clearing services.
              </p>
              <p>
                Investing in an index that tracks publicly listed exchanges offers a unique investment opportunity—allowing exposure to the financial infrastructure that underpins global markets. This article explores why investing in an index of stock exchange-listed companies can be a lucrative decision, the benefits and risks involved, and the various investment strategies investors can employ.
              </p>
              <p>
                On May 5, 2025, BeQ Holdings Indexes designed, calculated, and officially launched the BeQ Exchanges Index Series.
              </p>
              <p>
                The BeQ Top 5 Exchanges Index has delivered outstanding absolute returns, far surpassing most major international indexes. In 2023, the index surged by 27.50%, followed by an impressive 41.33% in 2024. As of the first four months of 2025, it has already achieved a strong gain of 28.47%.
              </p>
              <h2 className="text-3xl font-bold">Investment Strategies for Stock Exchange Indexes</h2>
              <p>
                Investors have various strategies for gaining exposure to publicly traded exchanges:
              </p>
              <p className="font-bold">Buy-and-Hold Strategy</p>
              <p>
                Investors can buy individual stocks of exchanges like Nasdaq, HKEX, or Deutsche Börse and hold them long-term, benefiting from dividends, steady growth, and capital appreciation.
              </p>
              <p className="font-bold">Exchange-Traded Funds (ETFs)</p>
              <p>
                Several ETFs track indices of publicly listed stock exchanges, offering diversification without requiring direct stock selection. Examples include funds focused on financial market infrastructure.
              </p>
              <p className="font-bold">Sector Rotation Approach</p>
              <p>
                Investors can adjust portfolio allocations based on market cycles—reducing exposure to exchanges during economic downturns and increasing investment during bull markets.
              </p>
              <p className="font-bold">Key Stock Exchange Indices</p>
              <p>
                For investors looking at broader exposure, here are some indices that track exchange operators:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>FTSE Mondo Visione Exchanges Index – Tracks publicly traded stock exchanges worldwide.</li>
                <li>S&P Global Exchange Index – Covers leading exchange operators like Nasdaq, ICE, and HKEX.</li>
                <li>Deutsche Börse Exchange Index – Focuses on European exchange operators.</li>
              </ul>
              <p>
                Investing in an index that tracks publicly traded stock exchanges offers a unique and stable long-term opportunity. These businesses benefit from consistent transaction revenues, market expansion, and diversified income streams. While regulatory risks and competition should be considered, stock exchange-listed companies remain fundamental to the global financial system, making them an attractive investment for those seeking stability and growth.
              </p>
              <p>
                Investors interested in stock exchange indices can explore ETF options, direct stock purchases, or long-term holding strategies to maximize potential returns. The key is to evaluate the financial health, dividend policies, and expansion strategies of stock exchanges before making an investment decision.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Higher Trading Volumes: Volatility often leads to increased trading activity, boosting revenue for the exchange.</li>
                <li>Resilience Through Diversified Revenue Streams: Exchanges earn from derivatives, ETFs, and clearing services, reducing dependence on stock price movements.</li>
                <li>Investor Confidence: A well-managed exchange can maintain stability, attracting investors even in uncertain times.</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Chart Tab */}
        <TabsContent value="chart" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/line_simple/demo@ccpr.vn:Demo2023?layout=compare&table=dbl_ind_month_chart&codes=INDEXC05CWPRUSD,INDSPX,INDVNINDEX&start=2008"
            className="h-[590px] w-full rounded-lg border-none"
          />
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/lines_bar/demo@ccpr.vn:Demo2023?layout=excess&table=dbl_ind_month_chart&codes=INDEXC05CWPRUSD,INDSPX&start=2019"
            className="mt-4 h-[590px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/overview/INDEXC05CWPRUSD"
            className="h-[1500px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/performance/INDEXC05CWPRUSD"
            className="h-[1800px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/compositions/INDEXC05CWPRUSD"
            className="h-[290px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Historical Data Tab */}
        <TabsContent value="historical-data" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/history/INDEXC05CWPRUSD"
            className="h-[620px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/documents/INDEXC05CWPRUSD"
            className="h-[150px] w-full rounded-lg border-none"
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BeqTop5ExchangesIndex;