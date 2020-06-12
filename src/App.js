import React from 'react';
import './App.scss';
import RateListing from './components/cards/RateListing';
import LiveNation from './components/sections/LiveNation';

function App() {
  return (
    <div className="App">
      <div className={'hero'}>
        <img src={'images/Hero.png'} alt={'S&T Bank Personal Credit Cards'} />
      </div>

      <section className={'mortgage-rates'}>
        <h2>Mortgage Rates</h2>
        <RateListing />
      </section>

      <section className={'live-nation'}>
        <LiveNation />
      </section>
    </div>
  );
}

export default App;
