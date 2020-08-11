import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Mybody from './mybody'
import Pics from './pics'
import './css/components.css'
import './css/global.css'
import './css/layout.css'
import './css/sample-wallpaper.css'
import hulk from './img/hulk-1.jpg'
import venom from './img/venom-1.jpg'
import venom2 from './img/venom-2.jpg'


function App() {
  return (
    <div>
      <Navbar />
      <br/>
      <br/>
      <header className='header'>
        <div className='container'>
      
      <Mybody />
      <div className='sample-wallpaper'>
        <Pics pic={venom} />
        <Pics pic={hulk} />
        <Pics pic={venom2} />
        
        </div>
      
      </div>

      </header>
    </div>
  );
}

export default App;
