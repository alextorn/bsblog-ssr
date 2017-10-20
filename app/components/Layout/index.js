import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from 'app/shell/routes';
import Header from 'app/components/Header';
import Footer from 'app/components/Footer';
import styles from 'app/assets/styles/index.css';

const Layout = () => (
  <Router>
    <div className={styles.app}>
      <Header />
      <main className={styles.content} role="main">
        <Switch>{routes.map(route => <Route {...route} key={route.path} />)}</Switch>
      </main>
      <Footer />
    </div>
  </Router>
);

export default Layout;
