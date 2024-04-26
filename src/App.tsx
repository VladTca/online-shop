import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";
import {Main} from "./layout/main/Main";

function App() {
  return (
    <div className="App">
        <Header/>
        <LeftSidebar/>
        <RightSidebar/>
        <Main/>
    </div>
  );
}

export default App;
