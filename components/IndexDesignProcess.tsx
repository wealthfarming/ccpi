"use client"
import { useTranslation } from "react-i18next";

export function IndexDesignProcess() {
  const { t } = useTranslation() 
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
              {t("index_design_process")}
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
                {t("step_1_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_1_desc")}
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
                {t("step_2_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_2_desc")} 
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
                {t("step_3_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_3_desc")}
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
                {t("step_4_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_4_desc")}
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
                {t("step_5_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_5_desc")}
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
                {t("step_6_title")}
              </h4>
              <p 
                className="text-gray-600 leading-relaxed" 
                style={{ 
                  fontStyle: "normal", 
                  letterSpacing: "0px" 
                }}
              >
                {t("step_6_desc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}