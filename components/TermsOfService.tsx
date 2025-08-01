'use client';
import { useTranslation } from "react-i18next";
import Link from 'next/link'

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <div 
        className="relative w-full"
        style={{
          height: "300px",
          backgroundImage: "url(https://ccpi.vn/wp-content/uploads/2024/08/ccpi-background-series-post.png)",
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
        <div className="financity-blog-title-container financity-container max-w-7xl mx-auto px-4 h-full">
          <div 
            className="financity-blog-title-content financity-item-pdlr h-full flex items-center justify-start"
          >
            <header className="financity-single-article-head clearfix">
                <div className="financity-single-article-head-right">
                    <h1 className="financity-single-article-title text-white font-bold text-4xl md:text-5xl lg:text-6xl"
                        style={{
                          textShadow: "2px 2px 4px rgba(0,0,0,0.7)"
                        }}
                    >
                        {t("terms-of-service")}
                    </h1>
                </div>
            </header>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-blue-600">
            <Link href="/" className="hover:underline p-2 color-[#254099]">{t("ccpi")}</Link> 
            <Link href="/category/legal/" className="hover:underline p-2 color-[#254099]">{t("legal")}</Link><span className="text-gray-600 p-2">{t("terms_of_service")}</span>
          </nav>
        </div>
      </div>

      <div className="relative w-full" id="financity-page-wrapper">
      </div>

      {/* Content */}
      <div className="w-[70%] mx-auto max-w-7xl px-4 py-8">
        <div className="space-y-6">
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_intro_1")}
          </p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_intro_2")}
          </p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            <strong>{t("tos_intro_3_strong")}</strong>: {t("tos_intro_3")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_1_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_1_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_2_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_2_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_3_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_3_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_4_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_4_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_5_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_5_content_1")}
          </p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_1")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_2")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_3")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_4")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_5")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_6")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_7")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_8")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_9")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_10")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_11")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_12")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_13")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_14")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_15")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_5_16")}</p>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_5_content_2")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_6_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_6_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_7_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_7_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_7_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_7_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_7_2_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_7_3_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_7_3_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_8_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_8_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_8_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_8_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_8_2_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_8_3_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_8_3_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_9_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_9_content_1")}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_1")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_2")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_3")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_4")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_5")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_9_list_6")}</li>
          </ul>

          <h2 className="text-3xl font-bold">{t("tos_section_10_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_10_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_11_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_11_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_12_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_12_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_12_1_content_1")}
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_12_1_list_1")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_12_1_list_2")}</li>
            <li style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>{t("tos_section_12_1_list_3")}</li>
          </ul>
          <h3 className="text-2xl font-bold">{t("tos_section_12_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_12_2_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_13_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_13_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_14_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_14_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_14_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_14_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_14_2_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_14_3_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_14_3_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_14_4_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_14_4_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_15_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_15_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_15_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_15_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_15_2_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_16_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_16_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_16_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_16_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_16_2_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_16_3_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_16_3_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_17_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_17_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_18_title")}</h2>
          <h3 className="text-2xl font-bold">{t("tos_section_18_1_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_18_1_content_1")}
          </p>
          <h3 className="text-2xl font-bold">{t("tos_section_18_2_title")}</h3>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_18_2_content_1")}
          </p>

          <h2 className="text-3xl font-bold">{t("tos_section_19_title")}</h2>
          <p style={{ fontSize: '18px', textTransform: 'none', color: '#000000' }}>
            {t("tos_section_19_content_1")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;