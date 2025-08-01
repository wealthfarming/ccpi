'use client';
import { LinkSimple } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface PortfolioItem {
  link: string;
  image: string;
  alt: string;
  width: number;
  height: number;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    link: '/portfolio/merger-acquisition/',
    image: 'https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_251320138-150x150.jpg',
    alt: '',
    width: 120,
    height: 120,
    title: 'shutterstock_251320138',
  },
  {
    link: '/portfolio/startup-funding/',
    image: 'https://ccpi.vn/wp-content/uploads/2016/06/pexels-photo-380769-150x150.jpeg',
    alt: '',
    width: 120,
    height: 120,
    title: 'pexels-photo-380769',
  },
  {
    link: '/portfolio/personal-asset-management/',
    image: 'https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_431851042-150x150.jpg',
    alt: '',
    width: 120,
    height: 120,
    title: 'shutterstock_431851042',
  },
  {
    link: '/portfolio/nft-exchange/',
    image: 'https://ccpi.vn/wp-content/uploads/2017/09/pexels-photo-315788-150x150.jpeg',
    alt: '',
    width: 120,
    height: 120,
    title: 'pexels-photo-315788',
  },
  {
    link: '/portfolio/stock-custodian-service/',
    image: 'https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_247037281-150x150.jpg',
    alt: '',
    width: 120,
    height: 120,
    title: 'shutterstock_247037281',
  },
  {
    link: '/portfolio/gender-equality/',
    image: 'https://ccpi.vn/wp-content/uploads/2017/09/shutterstock_158522279-150x150.jpg',
    alt: '',
    width: 120,
    height: 120,
    title: 'Advisory',
  },
  {
    link: '/portfolio/ccpr/',
    image: 'https://ccpi.vn/wp-content/uploads/2016/06/shutterstock_294489926-150x150.jpg',
    alt: '',
    width: 120,
    height: 120,
    title: 'shutterstock_294489926',
  },
];

interface TagItem {
  href: string;
  className: string;
  ariaLabel: string;
  text: string;
}

const tagItems: TagItem[] = [
  { href: '/tag/aiinfinance-2/', className: 'tag-cloud-link tag-link-441 tag-link-position-1', ariaLabel: '#AIInFinance (6 items)', text: '#AIInFinance' },
  { href: '/tag/aiinvestments-2/', className: 'tag-cloud-link tag-link-450 tag-link-position-2', ariaLabel: '#AIInvestments (6 items)', text: '#AIInvestments' },
  { href: '/tag/beqholdings-2/', className: 'tag-cloud-link tag-link-440 tag-link-position-3', ariaLabel: '#BeQHoldings (72 items)', text: '#BeQHoldings' },
  { href: '/tag/compoundinterest/', className: 'tag-cloud-link tag-link-491 tag-link-position-4', ariaLabel: '#CompoundInterest (13 items)', text: '#CompoundInterest' },
  { href: '/tag/cryptoinvestment/', className: 'tag-cloud-link tag-link-566 tag-link-position-5', ariaLabel: '#CryptoInvestment (6 items)', text: '#CryptoInvestment' },
  { href: '/tag/digitalassets/', className: 'tag-cloud-link tag-link-490 tag-link-position-6', ariaLabel: '#DigitalAssets (6 items)', text: '#DigitalAssets' },
  { href: '/tag/dynamicstrategies/', className: 'tag-cloud-link tag-link-508 tag-link-position-7', ariaLabel: '#DynamicStrategies (5 items)', text: '#DynamicStrategies' },
  { href: '/tag/financialfreedom-2/', className: 'tag-cloud-link tag-link-527 tag-link-position-8', ariaLabel: '#FinancialFreedom (23 items)', text: '#FinancialFreedom' },
  { href: '/tag/globalinvesting-2/', className: 'tag-cloud-link tag-link-455 tag-link-position-9', ariaLabel: '#GlobalInvesting (5 items)', text: '#GlobalInvesting' },
  { href: '/tag/globalmarkets-2/', className: 'tag-cloud-link tag-link-703 tag-link-position-10', ariaLabel: '#GlobalMarkets (6 items)', text: '#GlobalMarkets' },
  { href: '/tag/highreturns/', className: 'tag-cloud-link tag-link-486 tag-link-position-11', ariaLabel: '#HighReturns (7 items)', text: '#HighReturns' },
  { href: '/tag/investmentstrategy-2/', className: 'tag-cloud-link tag-link-569 tag-link-position-12', ariaLabel: '#InvestmentStrategy (6 items)', text: '#InvestmentStrategy' },
  { href: '/tag/nftindex/', className: 'tag-cloud-link tag-link-730 tag-link-position-13', ariaLabel: '#NFTIndex (9 items)', text: '#NFTIndex' },
  { href: '/tag/nftnec/', className: 'tag-cloud-link tag-link-576 tag-link-position-14', ariaLabel: '#NFTNEC (13 items)', text: '#NFTNEC' },
  { href: '/tag/passiveincome/', className: 'tag-cloud-link tag-link-526 tag-link-position-15', ariaLabel: '#PassiveIncome (14 items)', text: '#PassiveIncome' },
  { href: '/tag/smartinvesting-2/', className: 'tag-cloud-link tag-link-437 tag-link-position-16', ariaLabel: '#SmartInvesting (44 items)', text: '#SmartInvesting' },
  { href: '/tag/smartinvestment/', className: 'tag-cloud-link tag-link-518 tag-link-position-17', ariaLabel: '#SmartInvestment (10 items)', text: '#SmartInvestment' },
  { href: '/tag/sustainableinvestments-2/', className: 'tag-cloud-link tag-link-470 tag-link-position-18', ariaLabel: '#SustainableInvestments (5 items)', text: '#SustainableInvestments' },
  { href: '/tag/wealthfarming/', className: 'tag-cloud-link tag-link-505 tag-link-position-19', ariaLabel: '#WealthFarming (63 items)', text: '#WealthFarming' },
  { href: '/tag/aiinfinance/', className: 'tag-cloud-link tag-link-216 tag-link-position-20', ariaLabel: 'AIInFinance (8 items)', text: 'AIInFinance' },
  { href: '/tag/behavioralfinance/', className: 'tag-cloud-link tag-link-150 tag-link-position-21', ariaLabel: 'BehavioralFinance (11 items)', text: 'BehavioralFinance' },
  { href: '/tag/beqholdings/', className: 'tag-cloud-link tag-link-302 tag-link-position-22', ariaLabel: 'BeQHoldings (14 items)', text: 'BeQHoldings' },
  { href: '/tag/bigdata/', className: 'tag-cloud-link tag-link-238 tag-link-position-23', ariaLabel: 'BigData (7 items)', text: 'BigData' },
  { href: '/tag/bigdatainvesting/', className: 'tag-cloud-link tag-link-213 tag-link-position-24', ariaLabel: 'BigDataInvesting (9 items)', text: 'BigDataInvesting' },
  { href: '/tag/botalerts/', className: 'tag-cloud-link tag-link-231 tag-link-position-25', ariaLabel: 'BOTAlerts (10 items)', text: 'BOTAlerts' },
  { href: '/tag/bottradingsignals/', className: 'tag-cloud-link tag-link-304 tag-link-position-26', ariaLabel: 'BOTTradingSignals (7 items)', text: 'BOTTradingSignals' },
  { href: '/tag/ccpi/', className: 'tag-cloud-link tag-link-102 tag-link-position-27', ariaLabel: 'ccpi (11 items)', text: 'ccpi' },
  { href: '/tag/ccpidashboardlive/', className: 'tag-cloud-link tag-link-214 tag-link-position-28', ariaLabel: 'CCPIDashboardLive (29 items)', text: 'CCPIDashboardLive' },
  { href: '/tag/client/', className: 'tag-cloud-link tag-link-103 tag-link-position-29', ariaLabel: 'client (6 items)', text: 'client' },
  { href: '/tag/constructions/', className: 'tag-cloud-link tag-link-20 tag-link-position-30', ariaLabel: 'Constructions (8 items)', text: 'Constructions' },
  { href: '/tag/dashboardliveccpi/', className: 'tag-cloud-link tag-link-134 tag-link-position-31', ariaLabel: 'DashboardLiveCCPI (9 items)', text: 'DashboardLiveCCPI' },
  { href: '/tag/financialplanning/', className: 'tag-cloud-link tag-link-136 tag-link-position-32', ariaLabel: 'FinancialPlanning (8 items)', text: 'FinancialPlanning' },
  { href: '/tag/finvestgallery/', className: 'tag-cloud-link tag-link-221 tag-link-position-33', ariaLabel: 'FinvestGallery (12 items)', text: 'FinvestGallery' },
  { href: '/tag/greedandfear/', className: 'tag-cloud-link tag-link-211 tag-link-position-34', ariaLabel: 'GreedAndFear (8 items)', text: 'GreedAndFear' },
  { href: '/tag/industry/', className: 'tag-cloud-link tag-link-21 tag-link-position-35', ariaLabel: 'Industry (8 items)', text: 'Industry' },
  { href: '/tag/investmentpsychology/', className: 'tag-cloud-link tag-link-210 tag-link-position-36', ariaLabel: 'InvestmentPsychology (5 items)', text: 'InvestmentPsychology' },
  { href: '/tag/investmentstrategy/', className: 'tag-cloud-link tag-link-130 tag-link-position-37', ariaLabel: 'InvestmentStrategy (9 items)', text: 'InvestmentStrategy' },
  { href: '/tag/investmentsuccess/', className: 'tag-cloud-link tag-link-250 tag-link-position-38', ariaLabel: 'InvestmentSuccess (9 items)', text: 'InvestmentSuccess' },
  { href: '/tag/investmenttransparency/', className: 'tag-cloud-link tag-link-224 tag-link-position-39', ariaLabel: 'InvestmentTransparency (7 items)', text: 'InvestmentTransparency' },
  { href: '/tag/marketvolatility/', className: 'tag-cloud-link tag-link-145 tag-link-position-40', ariaLabel: 'MarketVolatility (9 items)', text: 'MarketVolatility' },
  { href: '/tag/portfoliomanagement/', className: 'tag-cloud-link tag-link-235 tag-link-position-41', ariaLabel: 'PortfolioManagement (5 items)', text: 'PortfolioManagement' },
  { href: '/tag/realtimedata/', className: 'tag-cloud-link tag-link-143 tag-link-position-42', ariaLabel: 'RealTimeData (7 items)', text: 'RealTimeData' },
  { href: '/tag/riskmanagement/', className: 'tag-cloud-link tag-link-237 tag-link-position-43', ariaLabel: 'RiskManagement (5 items)', text: 'RiskManagement' },
  { href: '/tag/smartinvesting/', className: 'tag-cloud-link tag-link-151 tag-link-position-44', ariaLabel: 'SmartInvesting (24 items)', text: 'SmartInvesting' },
  { href: '/tag/sp500/', className: 'tag-cloud-link tag-link-300 tag-link-position-45', ariaLabel: 'SP500 (7 items)', text: 'SP500' },
];

const SidebarWidgetComponent: React.FC = () => {
  return (
    <>
      <div id="gdlr-core-recent-portfolio-widget-3" className="widget widget_gdlr-core-recent-portfolio-widget financity-widget">
        <h3 className="financity-widget-title text-gray-800 mb-4 font-bold">Our Cases</h3>
        <div className="gdlr-core-recent-portfolio-widget-wrap grid grid-cols-5 gap-2">
          {portfolioItems.map((item, index) => (
            <div key={index} className="gdlr-core-recent-portfolio-widget gdlr-core-media-image relative">
              <Link href={item.link}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  title={item.title}
                  className="rounded"
                />
                <span className="gdlr-core-image-overlay absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] opacity-0 hover:opacity-100 transition-opacity">
                  <LinkSimple className="text-white" size={15} />
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div id="tag_cloud-2" className="widget widget_tag_cloud financity-widget mt-8">
        <h3 className="financity-widget-title text-gray-800 mb-4 font-bold">Tag Cloud</h3>
        <div className="tagcloud flex flex-wrap gap-2">
          {tagItems.map((tag, index) => (
            <Link
              key={index}
              href={tag.href}
              className={`border border-gray-300 bg-white text-[#254099] px-2 py-1 rounded hover:bg-blue-100 transition ${tag.className}`}
              aria-label={tag.ariaLabel}
            >
              {tag.text}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarWidgetComponent;