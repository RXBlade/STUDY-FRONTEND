import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Today from './today.js'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RXJournal</title>
        <meta name="description" content="An interactive journaling app." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <h1 className={styles.title}>RXJournal</h1>
      </header>
      <main className={styles.main}>
        <Today/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
