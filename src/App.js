import React, { useEffect } from 'react';
import Hero from './components/elements/Hero';
import Main from './components/pages/Main';
import Footer from './components/elements/Footer';
import Product from './components/pages/Product';
import Header from './components/elements/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Header />
      <Main />
      <Product />
      <Footer />
    </>
  );
}
