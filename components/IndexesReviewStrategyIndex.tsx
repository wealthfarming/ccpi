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
            <a href="/" className="hover:underline p-2 color-[#254099]">CCPI</a> &gt; 
            <a href="/products/" className="hover:underline p-2 color-[#254099]">Products</a> &gt; <span className="text-gray-600 p-2">{t("indexes_review_strategy")}</span>
          </nav>
        </div>
      </div>

      <div className="relative w-full" id="financity-page-wrapper">
    </div>

      {/* Main Title */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <h1 className="text-4xl font-bold uppercase text-gray-900">
          {t("indexes_review_strategy")}
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
              <h2 className="text-3xl font-bold">{t("exchanges_intro_title")}</h2>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>{t("index_review_attractive_title")}</h4>
              <p>
                {t("index_review_intro_p1")}
              </p>
              <p className="font-bold">
                {t("index_review_intro_p2")}
              </p>
              <p>
                {t("index_review_intro_p3")}
              </p>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>{t("index_review_title")}</h4>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>{t("index_review_definition_title")}</h5>
              <p>
                {t("index_review_definition_desc")}
              </p>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>{t("index_review_impact_title")}</h5>
              <p className="font-bold">
                {t("index_review_impact_p1")}
              </p>
              <p>
                {t("index_review_impact_p2")}
              </p>
              <p className="font-bold">
                {t("index_review_impact_p3")}
              </p>
              <p>
                {t("index_review_impact_p4")}
              </p>
              <p>
                {t("index_review_impact_p5")}
              </p>
              <h4 className="text-2xl font-bold" style={{ color: '#1c4587' }}>{t("index_review_strategy_title")}</h4>
              <h5 className="text-xl font-bold" style={{ color: '#b25f17' }}>{t("sp500_case_study_title")}</h5>
              <h5 className="text-xl font-bold" style={{ color: '#3b7527' }}>{t("opportunity_strategy_title")}</h5>
              <p>
                {t("sp500_review_p1")}
              </p>
              <p>
                {t("sp500_review_p2")}
              </p>
              <p>
                {t("sp500_review_p3")}
              </p>
              <p className="font-bold">
                {t("sp500_review_p4")}
              </p>
              <p>
                {t("beq_advantage_p1")}
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>{t("beq_advantage_buy")}</li>
                <li>{t("beq_advantage_sell")}</li>
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
              {t("indexes_review_strategy")}
            </a>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default IndexesReviewStrategyIndex;