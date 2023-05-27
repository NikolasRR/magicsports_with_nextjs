import styles from '@/styles/ItemBox.module.css';
import { useRouter } from 'next/router';
type ItemProps = {
  id: number,
  name: string,
  price: string,
  image: string
}

export default function ItemBox({ id, name, price, image }: ItemProps) {
  const router = useRouter();

  return <>
    <article className={styles.main} onClick={() => router.push(`/product/${id}`)}>
      <img className={styles.image} src={image}/>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>R${price}</p>
      </div>
    </article>
  </>
}