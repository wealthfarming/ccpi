// components/FeaturedCasesSection.tsx

export function FeaturedCasesSection() {
  return (
    <section 
      className="bg-white" 
      style={{ 
        margin: "10px 0px 0px 0px", 
        padding: "90px 0px 20px 0px" 
      }}
    >
      <div className="container mx-auto px-6">
        {/* Main Title */}
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
            Our Featured Cases
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

        {/* Two Charts Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Chart - Logistics Indexes Series */}
          <div className="flex flex-col">
            <div className="text-center" style={{ paddingBottom: "0px" }}>
              <h4 
                className="font-bold text-center" 
                style={{ fontSize: "20px" }}
              >
                IFRC/BeQ Holdings Logistics Indexes Series
              </h4>
            </div>
            
            <div className="mt-4">
              <iframe
                src="https://dashboardlive.ccpi.vn/api/chart/line_simple/demo@ccpr.vn:Demo2023?layout=compare&table=dbl_ind_month_chart&codes=INDVNXSECLOGCWPRVND,INDVNINDEX,INDSPX&start=2008"
                width="100%"
                height="450"
                style={{ 
                  boxSizing: "border-box", 
                  display: "block", 
                  border: "none" 
                }}
                title="IFRC/BeQ Holdings Logistics Indexes Series Chart"
              />
            </div>
          </div>

          {/* Right Chart - Petrolimex indexes Series */}
          <div className="flex flex-col">
            <div className="text-center" style={{ paddingBottom: "0px" }}>
              <h4 
                className="font-bold text-center" 
                style={{ fontSize: "20px" }}
              >
                IFRC/BeQ Holdings Petrolimex indexes Series
              </h4>
            </div>
            
            <div className="mt-4">
              <iframe
                src="https://dashboardlive.ccpi.vn/api/chart/line_simple/demo@ccpr.vn:Demo2023?layout=compare&table=dbl_ind_month_chart&codes=INDVNXSECPETCWPRVND,INDVNINDEX,INDSPX&start=2008"
                width="100%"
                height="450"
                style={{ 
                  boxSizing: "border-box", 
                  display: "block", 
                  border: "none" 
                }}
                title="IFRC/BeQ Holdings Petrolimex indexes Series Chart"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 