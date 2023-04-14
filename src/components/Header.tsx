import styles from '@/styles/Header.module.css'
import { Koulen } from 'next/font/google'
import { Play } from 'next/font/google'

const koulen = Koulen({ weight: ['400'], subsets: ['latin'] })
const play = Play({ weight: ['400'], subsets: ['latin'] })

export default function Header() {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.main}>
          <h1 className={koulen.className}>MAGICSPORTS</h1>
          <h2 className={play.className}>apenas para os bruxos do esporte</h2>
        </div>
      </div>
    </>
  )
}