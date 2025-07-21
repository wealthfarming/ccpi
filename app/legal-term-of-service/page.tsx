import TermsOfService from "@/components/TermsOfService";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";

const TermsOfServicePage = () => {
  return (
    <>
      <Header />
      <TermsOfService />
      <BottomNavigation />
      <Footer />
    </>
  );
};

export default TermsOfServicePage;