import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/index';
import Logo from '../Logo';
import styles from './styles.css';

const Header = () => (
  <div className={styles.app_header}>
    <header className={styles.header} role="banner">
      <div className={styles.header_left}>
        <Link className={styles.logo} to="/">
          <Logo />
        </Link>
      </div>
    </header>
    <Nav />
  </div>
);

export default Header;
