import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavBar from './NavBar';
import Banner from './Banner';
import Footer from './Footer';

function Page() {
  return (
    <div id="Page">
      <h2>Page</h2>
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default Page;