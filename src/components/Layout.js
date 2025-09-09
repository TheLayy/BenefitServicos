import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import SmallFooter from './SmallFooter';
import WhatsAppButton from './WhatsAppButton';
import BackToTopButton from './BackToTopButton';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <WhatsAppButton />
      <BackToTopButton />
      <Footer />
      <SmallFooter />
    </div>
  );
};

export default Layout;
