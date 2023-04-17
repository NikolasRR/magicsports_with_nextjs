import { ReactElement, useEffect, useState } from 'react'

import Layout from '@/components/Layout'
import ItemBox from '@/components/ItemBox';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { NextPageWithLayout } from './_app'
import { Product } from './api/types';

import styles from '@/styles/Home.module.css';

import requests from './api/requests';

const Home: NextPageWithLayout = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pages, setPages] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [])

  const fetchProducts = async (page: number) => {
    try {
      const data = await requests.getProducts(page);
      setProducts(data.page);
      setPages(data.pages);
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
      <div className={styles.page_navigation}>
        <FiChevronLeft className={styles.icon} />
        {pages.map(p =>
          <p
            className={currentPage === p ? styles.selected_page : undefined}
            onClick={() => {
              setCurrentPage(p);
              fetchProducts(p);
            }}
          >
            {p}
          </p>)}
        <FiChevronRight className={styles.icon} />
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