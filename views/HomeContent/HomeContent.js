import { CardMedia, Grid } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import Image from 'next/image'
import React from "react";
import styles from "./HomeContent.module.css";
// import imgOne from "../../assets/member-1.png";
import imgTwo from "../../public/assets/2.png"
const HomeContent = () => {

  return (
    <div className={styles.homeContent}>
      <Grid container>
        <Grid item sm={12} xs={12} md={6}>
          <span className={styles.title}>Life happens here</span>
          <h1 className={styles.brandText}>Warm up movie theater</h1>
          <p style={{ color: "white" }}>
            Filler text is text that shares some characteristics of a real
            written text, but is random or otherwise generated. It may be used
            to display a sample of fonts, generate text for testing, or to spoof
            an e-mail spam filterFiller text is text that shares some
            characteristics of a real written text, but is random or otherwise
            generated. It may be used to display a sample of fonts,
          </p>
          <div className={styles.buttonGroup}>
            <button className={styles.playBtn}>Play</button>
            <button className={styles.infoBtn}>Info</button>
          </div>
        </Grid>
        <Grid item sm={12} xs={12} md={6} style={{ textAlign: "right" }}>
          <Image src={imgTwo} alt="me" />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeContent;
