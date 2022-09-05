
import Head from 'next/head'
import Image from 'next/image'
import Navabr from '../components/utils/Navbar';
import styles from '../styles/Home.module.css';
import Page from '../components/dashboard/Page';

const dashboard = () => {
  return (
    <div className={styles.container}>
      <Navabr />
      <Page />
    </div>
  )
}

export default dashboard;
