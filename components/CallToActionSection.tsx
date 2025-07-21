import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
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
            <h3 className="text-3xl font-bold mb-3">Our Telegram</h3>
            <p className="text-sm text-gray-600 mb-6">
              Join our Financial Community on Telegram to Receive In-Depth
              Forecasts and Analyses.
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
            <h3 className="text-3xl font-bold mb-3">BeQ Unicorn Channel</h3>
            <p className="text-sm text-gray-600 mb-6">
              Link BeQ Unicorn Channel to update the latest financial information
              daily
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
                Telegram Channel
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;