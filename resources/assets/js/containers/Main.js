import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../components/Home';
import Header from '../components/Header';

const Main = () => {
  return(
    <div>
      <Header />
      <main>
        <Route exact path="/" component={Home} />
      </main>
    </div>
  );
}

export default Main;
