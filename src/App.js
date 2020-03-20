import React from 'react';

import Header from './components/header/header.component';
import Banner from './components/banner/banner.component';
import Directory from './components/directory/directory.component';
import ContactDirectory from './components/contact-directory/contact-directory.component';
import Footer from './components/footer/footer.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Directory/>
      <ContactDirectory/>
      <Footer/>
    </div>
  );
}

export default App;
