import React, { useState } from 'react'
import './Dashboard.css'

const Dashboard = () => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000);

  return (
    <div className='dashboard'>{loading ? <h2>Loading...</h2> : <h1>Welcome</h1>}</div>
  )
}

export default Dashboard