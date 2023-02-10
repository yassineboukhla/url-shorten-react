import React from "react";
import logo from "../Header/images/logo.svg";
import facebookIcon from "./images/icon-facebook.svg";
import instagramIcon from "./images/icon-instagram.svg";
import pinterestIcon from "./images/icon-pinterest.svg";
import twitterIcon from "./images/icon-twitter.svg";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footer}>
      <img src={logo} alt="" className={styles.footer_logo} />
      <div className={styles.footer_links}>
        <div className={styles.footer_links_items}>
          <h4>Features</h4>
          <a href="#t">Link Shortning</a>
          <a href="#t">Branded Links</a>
          <a href="#t">Analytics</a>
        </div>
        <div className={styles.footer_links_items}>
          <h4>Resources</h4>
          <a href="#t">Blog</a>
          <a href="#t">Developers</a>
          <a href="#t">Support</a>
        </div>
        <div className={styles.footer_links_items}>
          <h4>Company</h4>
          <a href="#t">About</a>
          <a href="#t">Our Team</a>
          <a href="#t">Careers</a>
          <a href="#t">Contact</a>
        </div>
        <div className={styles.footer_icons}>
          <img src={facebookIcon} alt="" />
          <img src={instagramIcon} alt="" />
          <img src={pinterestIcon} alt="" />
          <img src={twitterIcon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
