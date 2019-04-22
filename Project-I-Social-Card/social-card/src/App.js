import React from 'react';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Foot from './components/FooterComponents/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <HeaderContainer />
      <CardContainer />
      <Foot />
      </div>
  );
};

export default App;
