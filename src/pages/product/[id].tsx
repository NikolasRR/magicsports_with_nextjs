import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';

import { NextPageWithLayout } from '../_app';
import Layout from '@/components/Layout';

import { Product } from '../api/types';
import requests from '../api/requests';

const Products: NextPageWithLayout = () => {
  const router = useRouter();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async (id: number) => {
      try {
        const data = await requests.getProduct(id);
        setProduct(data);
      } catch (error) {
        alert("Something went wrong");
      }
    }

    fetchProduct(parseInt(router.query.id as string));
  }, [router.isReady])

  return (
    <main className='bg-white flex justify-center w-full h-[calc(100vh-120px)]' >
      <div className='flex mt-14'>
        <img className='w-350 h-350 object-contain' src={product?.image} />
        <div className='w-auto   flex flex-col ml-6'>
          <p className='text-purple font-play text-4xl mb-12'>{product?.name}</p>
          <p className='text-yellow font-koulen text-3xl mb-12'>R${product?.price}</p>
          <p className='text-purple font-play w-96 mb-28'>{product?.description}</p>
          <button className='text-purple font-koulen text-2xl bg-yellow w-270 h-70 rounded-lg mb-6'>COMPRAR AGORA</button>
          <button className='text-purple font-koulen text-2xl bg-yellow w-270 h-70 rounded-lg mb-20'>ADICIONAR AO CARRINHO</button>
        </div>
      </div>
    </main>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Products;