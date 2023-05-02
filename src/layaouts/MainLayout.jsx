
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <ToastContainer />
    <Footer />
    </>
  )
}

export default MainLayout