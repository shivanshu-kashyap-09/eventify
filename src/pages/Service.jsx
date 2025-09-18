import React from 'react'

import Filter from '../components/public/Filter'
import ServiceCard from '../components/card/ServiceCard'
import { Link } from 'react-router-dom'

const Service = () => {
  return (
    <>
    <Filter />
    <ServiceCard />
    <h1>TOTAL : {}</h1>
    <Link to="/payment">PAYMENT</Link>
    </>
  )
}

export default Service