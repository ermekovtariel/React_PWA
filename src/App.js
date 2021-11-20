/* eslint-disable eqeqeq */
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Pay, Paied } from './page';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='App-header'>
        <Routes>
          <Route exact path='/' element={<Pay />} />
          <Route exact path='/paied' element={<Paied />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
