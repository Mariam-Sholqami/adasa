
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../ScrollToTop/ScrollToTop'

function Layout() {
  return (
    <>
    <ScrollToTop />
    <div className='flex flex-col justify-between min-h-screen'>
      <Navbar/>
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer/>
    </div>
  
    </>
    
)}

export default Layout
