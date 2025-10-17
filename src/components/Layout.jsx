import React from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

/**
 * The Layout component wraps each page with a common header and footer.
 * It expects its children to be page-level components defined in
 * the router.  The container class constrains the maximum width of
 * interior content on large screens while allowing full bleed
 * sections (like hero images) to extend edge‑to‑edge.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;