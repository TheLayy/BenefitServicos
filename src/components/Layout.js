import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import SmallFooter from './SmallFooter';
import WhatsAppButton from './WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <WhatsAppButton />
      <Footer />
      <SmallFooter />
    </div>
  );
};

export default Layout;
