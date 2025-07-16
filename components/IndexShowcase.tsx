// components/IndexShowcase.tsx
import { AreaChart } from "lucide-react";

export function IndexShowcase() {
  return (
    <>
      {/* Financial Indices Section */}
      <section className="bg-[#0b1b53]">
        <div className="w-full">
          <div className="grid grid-cols-3 text-white">
            {/* S&P 500 */}
            <div className="text-center border-r border-gray-400 py-4 px-4">
              <h3 className="text-sm font-bold mb-1 text-gray-300">S&P 500</h3>
              <div className="text-lg font-bold text-green-400 mb-1">6268.56</div>
              <div className="text-green-400 text-xs">+0.14% • 2025/07/15</div>
            </div>
            
            {/* DOW JONES */}
            <div className="text-center border-r border-gray-400 py-4 px-4">
              <h3 className="text-sm font-bold mb-1 text-gray-300">DOW JONES INDUSTRIAL AVERAGE</h3>
              <div className="text-lg font-bold text-green-400 mb-1">44459.6</div>
              <div className="text-green-400 text-xs">+0.20% • 2025/07/15</div>
            </div>
            
            {/* VN30 */}
            <div className="text-center py-4 px-4">
              <h3 className="text-sm font-bold mb-1 text-gray-300">VN30, VIETNAM</h3>
              <div className="text-lg font-bold text-red-400 mb-1">1582.02</div>
              <div className="text-red-400 text-xs">-0.74% • 2025/07/15</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main services section */}
      <section className="bg-[#f5f5f5] py-0">
        <div className="mx-auto px-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* Logistics Indexes Series */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://ccpi.vn/wp-content/uploads/2017/09/hp-2-service-bg-1.jpg')",
                height: '380.289px'
              }}
            >
              <div className="relative text-white" style={{ padding: '80px 40px 30px 60px' }}>
                <div className="flex items-start mb-4">
                  <div className="mt-[10px] mr-[30px]">
                    <AreaChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold leading-tight mb-4">
                      IFRC/BeQ Holdings<br />
                      Logistics Indexes Series
                    </h3>
                    <div className="text-[17px] leading-relaxed opacity-90">
                      <p>Development of new products and services focused on the logistics value chain</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Vietnam Women CEO Indexes Series */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://ccpi.vn/wp-content/uploads/2017/09/hp-2-service-bg-2.jpg')",
                height: '380.289px'
              }}
            >
              <div className="relative text-white" style={{ padding: '80px 40px 30px 60px' }}>
                <div className="flex items-start mb-4">
                  <div className="mt-[10px] mr-[30px]">
                    <AreaChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold leading-tight mb-4">
                      IFRC/BeQ Holdings<br />
                      Vietnam Women CEO Indexes Series
                    </h4>
                    <div className="text-[17px] leading-relaxed opacity-90">
                      <p>CCPI found women to be the most underutilized source of growth that could send global market valuations soaring.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Indexes Series */}
            <div 
              className="relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('https://ccpi.vn/wp-content/uploads/2023/12/hp-2-service-bg-3-1.png')",
                height: '380.289px'
              }}
            >
              <div className="relative text-white" style={{ padding: '80px 40px 30px 60px' }}>
                <div className="flex items-start mb-4">
                  <div className="mt-[10px] mr-[30px]">
                    <AreaChart className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-semibold leading-tight mb-4">
                      IFRC/BeQ Holdings<br />
                      Energy Indexes Series
                    </h4>
                    <div className="text-[17px] leading-relaxed opacity-90">
                      <p>Navigating the energy landscape with clarity and confidence.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 