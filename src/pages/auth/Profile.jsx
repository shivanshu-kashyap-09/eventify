import React from 'react'

import UserInfo from '../../components/profile/UserInfo'
import BookHistory from '../../components/profile/BookHistory'
import PaymentHistory from '../../components/profile/PaymentHistory'

const Profile = () => {
  return (
    <>
    <UserInfo />
    <BookHistory />
    <PaymentHistory />
    </>
  )
}

export default Profile