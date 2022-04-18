import React from 'react'
import UserSearch from '../components/users/UserSearch'
import UserResults from '../components/users/UserResults'
import FleashMessage from '../components/layout/FleashMessage'

function Home() {
  return (
    <div>
      <FleashMessage />
      <UserSearch />
      <UserResults />
    </div>
  )
}

export default Home
