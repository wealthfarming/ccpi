// app/portfolio/business-strategy/page.tsx

import BusinessPortfolioComponent from '@/components/BusinessPortfolioComponent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ProjectSectionsComponent from '@/components/ProjectSectionsComponent'

const page = () => {
  return (
    <div>
      <Header />
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center bg-fixed z-[-1]"
          style={{ backgroundImage: `url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)`, padding: '360px 0 160px 0' }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex flex-col items-center justify-center h-full">
                <h1 className="text-[68px] font-bold text-white text-center">Business Strategy</h1>
                <p className="text-[14px] uppercase tracking-[2px] text-[#efefef] text-center">We provide the solution for asset management</p>
            </div>
        </div>
      <BusinessPortfolioComponent />
      <ProjectSectionsComponent />
      <Footer />
    </div>
  )
}

export default page