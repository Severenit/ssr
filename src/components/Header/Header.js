import React from 'react';
import Layout from '../Layout/Layout';
import NavMenu from '../NavMenu';

import logoPng from '../../assets/logo.png';

import s from './Header.module.scss';

const Header = () => {
  return (
    <div className={s.root}>
      <Layout className={s.layout}>
        <img className={s.logo} src={logoPng} alt="JSProEdition" />
        <NavMenu />
      </Layout>
    </div>
  );
};

export default Header;
