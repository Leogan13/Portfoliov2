import React from 'react';

import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import Directory from './components/directory/directory.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Directory/>
    </div>
  );
}

export default App;
