import React from 'react';

const App = ({ children }) => {
  return (
    <div>
      <h1>This is BeatHub rendered in App component</h1>
        { children }
    </div>
  );
};

export default App;
