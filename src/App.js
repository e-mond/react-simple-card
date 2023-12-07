import React, { Component } from 'react';
import SimpleCard from './components/Simplecard.jsx';

class App extends Component {
  render() {
    return (
    <div>
        <SimpleCard
          imageUrl="https://i.pinimg.com/564x/fd/b7/b5/fdb7b56d444babfb32665862cd5bf1a7.jpg" 
          title="THE MOST ANTICIPATED GAME RELEASE EVER?"
          description={
            <div>
              <p>
                {"The gaming community is buzzing with excitement as the trailer for Grand Theft Auto VI (GTA VI) finally dropped, offering a tantalizing glimpse into what could be the most immersive gaming experience ever. The graphics showcase a level of detail and realism that has fans eagerly anticipating the next chapter in the iconic franchise."}
              </p>
              <p>{"However, the excitement comes with a dose of impatience, as the release date is set for 2025. While Rockstar Games aims to deliver a polished masterpiece, the two-year wait leaves fans wondering if the payoff will be worth it."}</p>
              <p>{"As speculation runs rampant about GTA VI's storyline and features, the prolonged development time suggests a commitment to pushing the boundaries of gaming. The anticipation is palpable, with the gaming world eagerly awaiting Rockstar Games' next move. While the delay may test the patience of devoted fans, there's a prevailing sense that the wait for GTA VI might just redefine the standard for open-world gaming, making the countdown to 2025 all the more compelling."}</p>
            </div>
          }
        />
      </div>
    );
  }
}

export default App;
