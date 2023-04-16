import { ReactElement, useEffect, useState } from 'react'

import Layout from '@/components/Layout'
import ItemBox from '@/components/ItemBox';

import { NextPageWithLayout } from './_app'
import { Product } from './api/types';

import styles from '@/styles/Home.module.css';

import requests from './api/requests';

const Home: NextPageWithLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = async () => {
    try {
      const data = await requests.getProducts(0);
      setProducts(data.page);
    } catch (error) {
      alert("Something went wrong");
    }
  }

  return <>
    <main className={styles.main}>
      <h3 className={styles.title}>Nossos produtos</h3>
      <div className={styles.products}>
        {products.map(p => <ItemBox key={p.id} id={p.id} name={p.name} price={p.price} image={p.image} />)}
      </div>
    </main>
  </>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home;