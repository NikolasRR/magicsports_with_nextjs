import styles from '@/styles/ItemBox.module.css';
type ItemProps = {
  id: number,
  name: string,
  price: string,
  image: string
}

export default function ItemBox({ id, name, price, image }: ItemProps) {
  return <>
    <article className={styles.main}>
      <img className={styles.image} src={image}/>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.price}>R${price}</p>
      </div>
    </article>
  </>
}