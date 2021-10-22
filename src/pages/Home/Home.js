import React from 'react';

import Parallax from './components/Parallax';
import Button from '../../components/Button';

import s from './Home.module.scss';

const HomePage = () => {
  return (
    <div className={s.root}>
      <div className={s.content}>
        <h1 className={s.header}>
          <strong>Find</strong> all your favorite <strong>Pokemon</strong>
        </h1>
        <p className={s.paragraph}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities
        </p>
        <Button>
          See Pokemons
        </Button>
      </div>
      <Parallax />
    </div>
  );
};

export default HomePage;
