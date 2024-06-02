import React, { useEffect } from 'react'

export const LandingPage = () => {

  useEffect(() => {
    
    console.log("Landing Page mounted.");

    return () => console.log("Landing page umounted.");

  },[])

  return (
    <h2>Welcome to Student Manager</h2>
  )
}
