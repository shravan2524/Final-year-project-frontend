import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/utils/Navbar';
import MatchColumn from '../components/files/MatchColumn';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
       <Navbar />
        <MatchColumn />
    </div>
  )
}

export default Home