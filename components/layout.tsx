import { NextPage } from 'next'
import React from 'react'
import Header from './_header'

const Layout: NextPage = ({ children }) => {
  return (
    <div className='bg-silver h-screen'>
      <Header />
      <div className='p-16'>{children}</div>
    </div>
  )
}

export default Layout
