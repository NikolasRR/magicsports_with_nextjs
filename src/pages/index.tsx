import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import Layout from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return <p>oi</p>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;