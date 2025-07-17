// components/IndexDesignProcess.tsx

export function IndexDesignProcess() {
  return (
    <section className="py-16 bg-white">
              <div className="container mx-auto">
          {/* Title */}
          <div className="text-center" style={{ paddingBottom: "20px" }}>
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
              Index Design Process
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

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                1. Define Your Vision
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                What problem are you solving with this index? Is it tracking a specific market segment, measuring risk/return, or generating alpha? Who will use this index? Understanding your target audience.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                2. Craft the Universe
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Identify the assets or securities to be included. This could be stocks, bonds, commodities, or even alternative assets. Set eligibility criteria. Define factors like market capitalization, sector, geographic location, or liquidity for inclusion.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                3. Weighting Methodology
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                How will individual components contribute to the overall index value? Popular choices include market capitalization weighting, equal weighting, and factor-based weighting. Consider the impact of weighting on the index&apos;s performance and risk profile.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                4. Backtesting
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Simulate the historical performance of the index based on your chosen design. This helps identify potential biases and weaknesses. Make adjustments to the universe, components, or weighting until you achieve the desired performance.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                5. Building & Beyond
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Develop a clear methodology document outlining the index construction and calculation rules. Implement a system for regular rebalancing and data updates to ensure the index remains relevant and representative.
              </p>
            </div>
          </div>

          {/* Step 6 */}
          <div className="text-left">
            <div style={{ paddingBottom: "16px" }}>
              <h4 
                className="font-bold mb-3" 
                style={{ 
                  fontSize: "24px", 
                  fontWeight: "700", 
                  textTransform: "none", 
                  color: "#1e73be" 
                }}
              >
                6. Calculation & Dissemination
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                Develop a robust platform that efficiently and accurately calculates your index value at regular intervals. Clearly document your calculation methodology. Sharing your index&apos;s story, provide detailed documents explaining your index construction, weighting rationale, and performance history,...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}