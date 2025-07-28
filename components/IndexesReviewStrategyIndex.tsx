'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";


const IndexesReviewStrategyIndex = () => {
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
            <a href="https://ccpi.vn/products/" className="hover:underline p-2 color-[#254099]">Products</a> &gt; <span className="text-gray-600 p-2">INDEXES REVIEW STRATEGY INDEX</span>
          </nav>
        </div>
      </div>

      <div className="relative w-full" id="financity-page-wrapper">
    </div>

      {/* Main Title */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="text-4xl font-bold uppercase text-gray-900">
          INDEXES REVIEW STRATEGY INDEX
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
                src="https://ccpi.vn/wp-content/uploads/2025/02/Resize.svg"
                alt="Index review strategy"
                className="w-full shadow-lg"
              />
            </div>
            <div className="col-span-2 space-y-4 pl-6">
              <h2 className="text-3xl font-bold">Introduction</h2>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>Why is Index Review an Attractive Strategy?</h4>
              <p>
                It is widely known that the index needs to be reviewed periodically. For example, S&P 500 is reviewed quarterly, NIKKEI 225 is reviewed semi-annually, NASDAQ 100 is reviewed annually.
              </p>
              <p className="font-bold">
                Based on transparent rules and experience on the index Committee, early trade before announcement will have significant profits.
              </p>
              <p>
                Having enough ability to anticipate the list of new stock addition/ deletion, BeQ can take the advantage from temporary market swings when an index announces changes and makes profit.
              </p>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>Index Review</h4>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>Definition</h5>
              <p>
                Index reviewing involves an initial review of assets, setting criteria based on market conditions, and making subsequent adjustments to asset weights, sometimes leading to the addition or removal of specific assets.
              </p>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>How Index Review Impacts the Stock Market?</h5>
              <p className="font-bold">
                The regular reconstitution of equity indices can significantly influence the performance of companies included or excluded.
              </p>
              <p>
                Extensive academic research has explored the impact of these changes on stock prices, trading volume, and other firm attributes. Studies have consistently demonstrated that inclusion in a prominent index often leads to increased investor interest, while exclusion can have adverse consequences.
              </p>
              <p className="font-bold">
                Index rebalancing often triggers a surge in trading activity due to the immediate need for institutional and retail investors to adjust their portfolios.
              </p>
              <p>
                Asset managers overseeing index funds or ETFs must rapidly rebalance their holdings to align with the new index composition, leading to increased demand for the added stocks and decreased demand for the removed ones. This heightened trading activity can create short-term price discrepancies that arbitrageurs may exploit for profit.
              </p>
              <p>
                Index rebalancing can significantly impact stock volatility. Newly added stocks often experience price increases due to buying pressure from index-tracking funds, while removed stocks may face selling pressure, leading to price declines. Although these price movements are often short-lived, they can create both challenges and opportunities for active investors seeking to capitalize on market inefficiencies.
              </p>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>Index Review Strategy</h4>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>S&P 500 Case study</h5>
              <h5 className="text-xl font-bold" style={{ color: '#3b7527' }}>Opportunity and Strategy</h5>
              <p>
                Particularly for the case of S&P 500, it is reviewed quarterly for every 3 months in March, June, September, December.
              </p>
              <p>
                The list of companies that are qualified for the S&P 500 will be anticipated on the first trading day of the review month (March, June, September, December).
              </p>
              <p>
                Effective date is the first trading day after the third Friday of March, June, September, and December.
              </p>
              <p className="font-bold">
                Based on transparent rules and experience on the index Committee, early trade before announcement will have significant profits.
              </p>
              <p>
                Having enough ability to anticipate the list of new stock addition/ deletion, BeQ can take the advantage from temporary market swings when an index announces changes and makes profit. By predicting the list of new addition before any official announcements announce, BeQ has the advantage of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Buying forecasted additional stocks with lower price at the beginning of review month.</li>
                <li>Selling the purchased stocks after the effective day with a higher price. Once the newly added stocks are part of the index, they can create temporary market swings. Stocks added might see a short-term price increase due to buying pressure. BeQ can potentially profit from these short-term price movements.</li>
              </ul>
            </div>
          </div>
        </TabsContent>

        {/* Chart Tab */}
        <TabsContent value="chart" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/line_simple/demo@ccpr.vn:Demo2023?layout=compare&table=dbl_ind_month_chart&codes=INDREVRT20CWPRUSD,INDSPX,INDVNINDEX&start=2022-12-31"
            className="h-[590px] w-full rounded-lg border-none"
          />
          <iframe
            src="https://dashboardlive.ccpi.vn/api/chart/lines_bar/demo@ccpr.vn:Demo2023?layout=excess&table=dbl_ind_month_chart&codes=INDREVRT20CWPRUSD,INDSPX&start=2022"
            className="mt-4 h-[590px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Overview Tab */}
        <TabsContent value="overview" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/overview/INDREVRT20CWPRUSD"
            className="h-[1500px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Performance Tab */}
        <TabsContent value="performance" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/performance/INDREVRT20CWPRUSD"
            className="h-[1800px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/compositions/INDREVRT20CWPRUSD"
            className="h-[290px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Historical Data Tab */}
        <TabsContent value="historical-data" className="py-8">
          <iframe
            src="https://dashboardlive.ccpi.vn/top_index/history/INDREVRT20CWPRUSD"
            className="h-[620px] w-full rounded-lg border-none"
          />
        </TabsContent>

        {/* Documents Tab */}
        <TabsContent value="documents" className="py-8">
          <div className="text-center">
            <a 
              href="https://docs.google.com/presentation/d/1KNItoXa8cd19LnU96j1KAcY2LnE1wjSNkcHQXVdlfMY/edit?slide=id.g36b745b5967_0_812#slide=id.g36b745b5967_0_812"
              className="text-blue-600 hover:underline text-lg font-bold"
            >
              INDEXES REVIEW STRATEGY INDEX
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndexesReviewStrategyIndex;