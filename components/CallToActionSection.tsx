"use client"
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const CallToActionSection = () => {
  const { t } = useTranslation()
  return (
    <div className="relative py-24 bg-[#0f0f0f] overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-35"
        style={{
          backgroundImage: `url(https://ccpi.vn/wp-content/uploads/2016/06/pexels-photo-266044.jpeg)`,
        }}
      ></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 bg-white">
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {/* First Call to Action */}
          <div className="flex-1 max-w-md p-8 text-center">
            <h3 className="text-3xl font-bold mb-3">{t("our-tele")}</h3>
            <p className="text-sm text-gray-600 mb-6">
              {t("our-tele-des")}
            </p>
            <Button
              asChild
              className="bg-[#254099] text-white border-none hover:bg-[#254099] p-5"
            >
              <a
                href="https://t.me/+WB-clKjWnuFjZWM1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Telegram
              </a>
            </Button>
          </div>

          {/* Second Call to Action */}
          <div className="flex-1 max-w-md p-8 text-center">
            <h3 className="text-3xl font-bold mb-3">{t("beq-channel")}</h3>
            <p className="text-sm text-gray-600 mb-6">
              {t("beq-channel-des")}
            </p>
            <Button
              asChild
              className="bg-[#254099] text-white border-none hover:bg-[#254099] p-5"
            >
              <a
                href="https://t.me/BeQUnicorn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t("tele-channel")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;