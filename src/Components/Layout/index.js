import React from 'react';
import NavBar from './NavBar';
import Banner from './Banner'
import Footer from './Footer'

function Page() {
  return (
    <div id="Page">
      <h2>Page</h2>
      <Banner />
      <NavBar />
      <Footer />
    </div>
  );
}

export default Page;