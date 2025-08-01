import SidebarWidgetComponent from '@/components/SidebarWidgetComponent'
import CategoryPageComponent from '@/components/CategoryPageComponent'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

const page = () => {
    return (
        <div>
            <Header />
            <div
                className="relative bg-cover bg-center h-64"
                style={{ backgroundImage: `url(https://ccpi.vn/wp-content/uploads/2017/09/page-title-background.jpg)` }}
            >
                <div className="absolute inset-0 bg-black opacity-30"></div>
                <div className="relative flex flex-col items-start justify-start h-full text-left p-20 ml-68">
                    <h1 className="text-5xl font-bold text-white text-left">Category</h1>
                    <div className="text-white text-left mt-2">Invest Like a Billionaire</div>
                </div>
            </div>
            <div className="w-[1200px] grid grid-cols-2 gap-10 mx-auto mt-10">
                <div>
                    <CategoryPageComponent />
                </div>
                <div>
                    <SidebarWidgetComponent />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default page