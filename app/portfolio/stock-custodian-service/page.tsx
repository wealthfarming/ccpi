import PortfolioComponent from '@/components/PortfolioComponent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import ResultDrivenComponent from '@/components/ResultDrivenComponent'
import ProjectSectionsComponent from '@/components/ProjectSectionsComponent'

const page = () => {
  return (
    <div>
      <Header />
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center h-84"
          style={{ backgroundImage: `url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)` }}
        >
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="relative flex flex-col items-start justify-center h-full ml-28">
                <h1 className="text-4xl font-bold text-white text-left">Merger & Acquisition</h1>
                <p className="text-white text-left">We provide the solution for asset management</p>
            </div>
        </div>

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4">
          <nav className="text-sm text-blue-600">
            <a href="/" className="hover:underline p-2 color-[#254099]">CCPI</a>
            &gt; <a href={`/portfolio/merger-acquisition`} className="hover:underline">Merger & Acquisition</a> &gt;<span className="text-gray-600 p-2">Merger & Acquisition</span>
          </nav>
        </div>
      <PortfolioComponent />
      <ResultDrivenComponent />
      <ProjectSectionsComponent />
      <Footer />
    </div>
  )
}

export default page