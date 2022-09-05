import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/utils/Navbar';
import Page from '../components/dashboard/Page';
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <Page />
    </div>
  )
}

export default Home