import React from 'react';
import Layout from '../Layout/Layout';

import s from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={s.root}>
      <Layout>
        Make with ❤
      </Layout>
    </div>
  );
};

export default Footer;
