// DrawerLayout.tsx
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import DrawerMenu from './DrawerMenu';

type DrawerLayoutProps = {
  children: React.ReactNode;
};

const DrawerLayout: React.FC<DrawerLayoutProps> = ({ children }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <main className="mb-auto">
          {children}
        </main>
        <Footer />
      </div>
      <DrawerMenu />
    </div>
  );
};

export default DrawerLayout;

