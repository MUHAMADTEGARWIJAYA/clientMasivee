import Footer from '../../components/Footer';
import NavSeller from '../../components/NavSeller';
import SidebarSeller from '../../components/SidebarSeller'
import TambahProduk from '../../components/seller/TambahProduk/TambahProduk'

const HomeLayout = () => {
    return (
        <div className='bg-gray-100 min-h-screen flex flex-col'>
            <NavSeller /> 
            
            {/* <Outlet /> Halaman login akan dirender di sini */}
            
            
            <div className="flex flex-1 p-4 gap-4">
                <SidebarSeller className="w-1/4" /> 
                <div className="flex-1">
                <TambahProduk  /> 
                </div>
            </div>
          
          

            <Footer />
          
        </div>
    );
};

export default HomeLayout;