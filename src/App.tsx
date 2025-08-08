import { Route, Routes } from 'react-router-dom'
import './App.css'
import '../src/assets/css/animate.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'
import MainLayout from './Layout/MainLayout'
import './assets/css/style.css'
import BlogDetails from './pages/BlogDetails';
import { useEffect } from 'react';
import ScrollToTopButton from './components/Common/ScrollToTopButton';
import BuyMeCoffeeButton from './components/Common/BuyMeCoffee';
import NotFound from './pages/NotFound';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLayout />} />
        <Route path='/blog/:id' element={<BlogDetails />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <BuyMeCoffeeButton />
      <ScrollToTopButton />
      <Footer />

    </>
  )
}

export default App
