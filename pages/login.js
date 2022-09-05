import React from "react";
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';  
import Footer from '../components/Footer';
import Welcome from "../components/page1/Welcome";
import Setup from "../components/page1/Setup";
import Setup2 from "../components/page1/Setup2";
import GstPortalCredentials from "../components/page1/GstPortalCredentials";

export default function login(){
    return(
        <div className={styles.container}>
        <Footer />
      </div>
    )

}