import React from 'react'
import Head from 'next/head'
import Header from '../src/components/Header'
import Search from '../src/components/Search'
import { Provider } from '../src/store'

const Home = () => {
  return <>
    <Head>
      <title>Inspire to Be Better!</title>
    </Head>
    <Provider>
      <Header />
      <Search />
    </Provider>
  </>
}

export default Home
