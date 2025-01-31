import React from "react";
import Logo from "./UI/Logo/Logo";
import ProfileLink from "./UI/ProfileLink/ProfileLink";
import styles from '../styles/Header.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <ProfileLink />
    </header>
  )
}

export default Header;