import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

const Button = ({ children, type = 'default', onClick }) => {
  return (
    <button type="button" className={cn(s.root, s[type])} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
