import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';

import s from './NavMenu.module.scss';

const MENU = [
  {
    link: '/',
    title: 'Home',
  },
  {
    link: '/about',
    title: 'About',
  }
]

const NavMenu = () => {
  const { pathname } = useLocation();

  return (
    <nav className={s.root}>
      {
        MENU.map(({link, title}, index) => (
          <Link key={index} className={cn(s.link, {[s.active]: pathname === link})} to={link}>{title}</Link>
        ))
      }
    </nav>
  );
};

export default NavMenu;
