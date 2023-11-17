import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const MyForm = () => {
  const [name, setName] = useState('');
  const [selectedFruit, setSelectedFruit] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          data-testid="name"
        />
      </div>
      <div>
        <Autocomplete
          options={fruitOptions}
          value={selectedFruit}
          onChange={(event, value) => setSelectedFruit(value)}
          renderInput={(params) => (
            <TextField {...params} label="Choose a fruit" data-testid="autocomplete" />
          )}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" data-testid="button">
          Submit
        </Button>
      </div>
      {submitted && (
        <div>
          <p>Hello, {name}! Your favorite fruit is {selectedFruit || 'unknown'}.</p>
        </div>
      )}
    </form>
  );
};

export default MyForm;
