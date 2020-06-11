import React from 'react';
import './App.scss';
import RateListing from './components/cards/RateListing';

function App() {
  return (
    <div className="App">
      <div className={'hero'}>
        <img src={'images/Hero.png'} alt={'S&T Bank Personal Credit Cards'} />
      </div>

      <section>
        <h2>Mortgage Rates</h2>
        <RateListing />
      </section>
    </div>
  );
}

export default App;
