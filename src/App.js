import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import cn from 'classnames';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';

import s from './App.module.scss';

const App = () => {
  const { pathname } = useLocation();

  return (
    <div className={cn({
      [s.home]: pathname === '/'
    })}>
      <Header />
      <div className={s.root}>
        <Layout>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </Layout>
      </div>
      <Footer />
    </div>
  );
};

export default App;
