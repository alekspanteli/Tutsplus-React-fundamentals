import React from 'react';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <React.Fragment>
        <Navbar title="Lots of components" />
        <div class="bg-dark">Hello World</div>
      </React.Fragment>
    </div>
  );
};

export default App;
