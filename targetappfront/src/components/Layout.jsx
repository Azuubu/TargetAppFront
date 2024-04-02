import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<h2>Loading..</h2>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
