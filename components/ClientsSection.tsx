// components/ClientsSection.tsx
import Image from "next/image";
import { Link } from "lucide-react";

export function ClientsSection() {
  return (
    <section className="py-12" style={{ margin: "30px 0px 0px 0px" }}>
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center" style={{ paddingBottom: "27px" }}>
          <h3 
            className="font-semibold text-center" 
            style={{ 
              fontSize: "44px", 
              fontWeight: "600", 
              letterSpacing: "0px", 
              textTransform: "none", 
              color: "#232323" 
            }}
          >
            Our Clients
          </h3>
        </div>

        {/* Divider */}
        <div className="flex justify-center" style={{ marginBottom: "55px" }}>
          <div 
            style={{ 
              width: "54px", 
              height: "4px", 
              backgroundColor: "#254099" 
            }}
          ></div>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" style={{ paddingBottom: "160px" }}>
          {/* Asset Managers */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-2.png" 
                alt="Asset Managers" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Asset Managers
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                With groundbreaking research across diverse areas, we empower managers to make informed decisions through the financial industry&apos;s evolution.
              </p>
            </div>
          </div>

          {/* Asset Owners */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-3.png" 
                alt="Asset Owners" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Asset Owners
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Boosting investment confidence: institutional investors choose us for superior decision-making frameworks and portfolio analysis tools.
              </p>
            </div>
          </div>

          {/* Financial Intermediary */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/3.png" 
                alt="Financial Intermediary" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Financial Intermediary
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                We provide financial intermediary with the research, analytics, and indexes they need to make informed investment decisions and navigate complexity with ease.
              </p>
            </div>
          </div>

          {/* Corporates */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/08/hompage-ccpi-1.png" 
                alt="Corporates" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Corporates
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Gain the ESG and climate edge: benchmark performance, optimize decisions, and unlock capital with our robust data and tools.
              </p>
            </div>
          </div>

          {/* Researchers */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/researcher.png" 
                alt="Researchers" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Researchers
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Explore and leverage a vast universe of financial data, including market prices, fundamentals, and alternative datasets, to refine your index construction.
              </p>
            </div>
          </div>

          {/* Media & Association */}
          <div className="text-left">
            <div className="relative group mb-4">
              <Image 
                src="https://ccpi.vn/wp-content/uploads/2024/01/media.png" 
                alt="Media & Association" 
                width={700} 
                height={423}
                className="w-full h-auto rounded"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
                <Link className="text-white w-6 h-6" />
              </div>
            </div>
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-2" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none" 
                }}
              >
                Media & Association
              </h4>
              <p 
                className="text-gray-600" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Motivate and reward members based on their participation, content creation. Highlight success stories from similar organizations using the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}