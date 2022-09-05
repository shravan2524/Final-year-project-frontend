import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Page from '../components/recoReports/Page';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Page />
    </div>
  )
}

export default Home