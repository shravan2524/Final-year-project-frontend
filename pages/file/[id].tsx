import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Navbar from '../../components/utils/Navbar'
import Page1 from '../../components/reconcilation/Page1'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
        <Navbar />
        <Page1 />
    </div>
  )
}

export default Home