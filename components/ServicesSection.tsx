// components/ServicesSection.tsx
import Image from 'next/image';

export function ServicesSection() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        {/* Main Title and Divider */}
        <div className="text-center" style={{ paddingBottom: "26px" }}>
          <h3 
            className="font-semibold text-center" 
            style={{ 
              fontSize: "44px", 
              fontWeight: "600", 
              letterSpacing: "0px", 
              textTransform: "none", 
              color: "#212121" 
            }}
          >
            Our Services
          </h3>
        </div>
        
        {/* Blue Divider */}
        <div className="flex justify-center" style={{ marginBottom: "55px" }}>
          <div 
            className="h-1"
            style={{ 
              width: "54px", 
              backgroundColor: "#254099", 
              height: "4px" 
            }}
          />
        </div>

        {/* Service 1: Indexes & Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Indexes-Benchmarks.png"
                alt="Indexes & Benchmarks"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">Indexes & Benchmarks</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>Global, regional, and sector benchmarks:</strong> Track performance across diversified markets, including equities, fixed income, and real estate.
                </li>
                <li>
                  <strong>Thematic and factor-based indexes:</strong> Focus on specific investment themes like ESG, clean energy, or value investing.
                </li>
                <li>
                  <strong>Custom indexes:</strong> Design personalized benchmarks tailored to unique investment strategies and objectives.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: Research & Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">Research & Analytics</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>Fundamental and quantitative research:</strong> Deep dives into market trends, sector dynamics, and company financials.
                </li>
                <li>
                  <strong>Risk and return analysis:</strong> Identify potential risks and optimize portfolio performance through data-driven insights.
                </li>
                <li>
                  <strong>ESG ratings and data:</strong> Assess the environmental, social, and governance practices of companies for sustainable investment decisions.
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Research.png"
                alt="Research & Analytics"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Service 3: Portfolio Tools & Technology */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-30">
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Portfolio-Tools-Technology.png"
                alt="Portfolio Tools & Technology"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">Portfolio Tools & Technology</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>Portfolio construction and optimization:</strong> Build effective portfolios aligned with specific risk preferences and investment goals.
                </li>
                <li>
                  <strong>Performance measurement and attribution:</strong> Track portfolio performance and identify alpha-generating components.
                </li>
                <li>
                  <strong>Data and software solutions:</strong> Access comprehensive financial data and analytical tools to fuel informed investment decisions.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 4: Investment Support & Services */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex items-start">
            <div className="text-black">
              <h4 className="text-center text-xl font-bold mb-6">Investment Support & Services</h4>
              <ul className="space-y-4 text-sm leading-relaxed">
                <li>
                  <strong>Index licensing and replication:</strong> Utilize CCPI's indexes as benchmarks for investment products and strategies.
                </li>
                <li>
                  <strong>Consulting and advisory services:</strong> Leverage CCPI's expertise for customized solutions and market insights.
                </li>
                <li>
                  <strong>Educational resources and events:</strong> Stay informed with research reports, webinars, and conferences on industry trends and best practices.
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-3">
            <div className="flex justify-center">
              <Image
                src="https://ccpi.vn/wp-content/uploads/2024/01/Investment-Support.png"
                alt="Investment Support & Services"
                width={700}
                height={423}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}