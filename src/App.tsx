import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <LeftSidebar/>
    </div>
  );
}

export default App;
