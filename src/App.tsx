import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";

function App() {
  return (
    <div className="App">
        <Header/>
        <LeftSidebar/>
        <RightSidebar/>
    </div>
  );
}

export default App;
