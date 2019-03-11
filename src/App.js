import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CommonLayout from './layouts/Common';

function App() {
  return (
    <BrowserRouter>
      <CommonLayout />
    </BrowserRouter>
  );
}

export default App;
