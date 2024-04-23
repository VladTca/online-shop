import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';

function App() {
  return (
    <div className="App">
        <Header/>
        <LeftSidebar/>
    </div>
  );
}

export default App;
