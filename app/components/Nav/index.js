import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const Nav = () => (
  <nav className={styles.menu}>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        Обзоры
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/blog">
        Мнение
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        Деятельность
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        Проекты
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        Видео
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        Vox Populi
      </Link>
    </li>
    <li className={styles.menu_item}>
      <Link className={styles.menu_link} to="/">
        English Page
      </Link>
    </li>
  </nav>
);

export default Nav;
