import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './Header';
import Inscription from './Inscription';
import Seconnecter from './Seconnecter';

function App() {
  return (
    <div className="App">
        <Header/>
        <Inscription/>
        <Seconnecter/>
    </div>
  );
}

export default App;
