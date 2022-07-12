import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '../../../components/Header'
import Sidebar from '../../../components/Sidebar'

export default function AppLayout({ children }:any) {

  return (
    <>
      <Header/>
      <Sidebar/>
      <main>{children}</main>
    </>
  )
}
