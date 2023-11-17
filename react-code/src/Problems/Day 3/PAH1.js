import React, { useState } from 'react';

const GokuApp = () => {
  const [transformation, setTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div>
      <h1>Goku's Transformation App</h1>
      <p>Current Transformation: {transformation}</p>
      <button onClick={toggleTransformation}>Toggle Transformation</button>
    </div>
  );
};

export default GokuApp;
