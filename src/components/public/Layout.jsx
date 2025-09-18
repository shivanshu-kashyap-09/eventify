import React from 'react';
import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Chat from '../../pages/Chat'

const Layout = () => {
  return (
    <>
    <Header />
    <main className='min-h-screen mt-20'>
      <Outlet/>
    </main>
    {/* <button>MIC</button>
    <Chat /> */}
    <Footer />
    </>
  )
}

export default Layout