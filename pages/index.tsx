import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';
import Welcome from "../components/page1/Welcome";
import Setup from "../components/page1/Setup";
import Setup2 from "../components/page1/Setup2";
import GstPortalCredentials from "../components/page1/GstPortalCredentials";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Welcome />
      <Footer />
    </div>
  )
}

export default Home
