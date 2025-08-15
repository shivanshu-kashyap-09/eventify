import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Layout from './components/public/Layout'
import About from './components/home/About'
import ChooseUs from './components/home/ChooseUs'
import HowItWork from './components/home/HowItWork'
import ContactUs from './components/home/ContactUs'

import Home from './pages/Home'
import Plan from './pages/Plan'
import Service from './pages/Service'
import ServiceDetail from './pages/ServiceDetail'
import RecommendedService from './pages/RecommendedService'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Forget from './pages/auth/Forget'
import Profile from './pages/auth/Profile'
import Payment from './pages/Payment'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/chooseus' element={<ChooseUs />} />
        <Route path='/howitwork' element={<HowItWork />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/plan' element={<Plan />} />
        <Route path='/event/:eventName' element={<Service />} />
        <Route path='/service/:serviceName/:id' element={<ServiceDetail />} />
        <Route path='/service/:serviceName/recommended' element={<RecommendedService />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/profile/:userId' element={<Profile />} />
        <Route path='/payment' element={<Payment />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
