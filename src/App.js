import React from 'react';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>My Contacts</h1>
      <div className="contact">
        <h2>Taylor Swift</h2>
        <img src="https://pbs.twimg.com/profile_images/2771615707/56fa97fbbb47bfe728e718854628c96c.jpeg" alt=""/>
        <p>123-456-7890</p>
        <p>taylorswift@gmail.com</p>
      </div>
      <div className="contact">
        <h2>Tom Holland</h2>
        <img src="https://styles.redditmedia.com/t5_3gswo/styles/communityIcon_zgnztylq4br71.png" alt=""/>
        <p>444-444-4444</p>
        <p>spiderman@marvel.com</p>
      </div>
      <div className="contact">
        <h2>Zendaya</h2>
        <img src="https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2VkNDczMDg2Y2M1N2Q3Y2E2MTY4OThlOWNmZTBiZGFiLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D" alt=""/>
        <p>777-888-9999</p>
        <p>zendaya@yahoo.com</p>
      </div>
    </div>
  );
}

export default App;
