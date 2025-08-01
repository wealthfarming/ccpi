import NFTProjectComponent from '@/components/NFTProjectComponent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const page = () => {
  return (
    <div>
      <Header />
        {/* Header Section */}
        <div
          className="relative bg-cover bg-center h-[500px]"
          style={{ backgroundImage: `url("https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg")` }}
        >
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative flex flex-col items-center justify-center h-full">
            <h1 className="text-[68px] font-bold text-white text-center uppercase">NFT-Exchange</h1>
            <p className="text-[14px] uppercase tracking-[2px] text-[#efefef] text-center">WE PROVIDE THE SOLUTION FOR ASSET MANAGEMENT</p>
          </div>
        </div>
      <NFTProjectComponent />
      <Footer />
    </div>
  )
}

export default page