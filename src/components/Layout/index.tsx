import React from 'react'
import Head from 'next/head'
import Sidebar from '../Sidebar'
import Header from '../Header'

export default function Layout({ children }:any) {
  return (
    <>
      <main>{children}</main>
    </>
  )
}
