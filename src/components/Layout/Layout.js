import React from 'react';
import cn from 'classnames';

import s from './Layout.module.scss';

const Layout = ({ children, className }) => {
  if (!children) {
    return null;
  }

  return (
    <div className={cn(s.root, className)}>
      { children }
    </div>
  );
};

export default Layout;
