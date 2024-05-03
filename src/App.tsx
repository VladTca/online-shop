import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";
import {Main} from "./layout/main/Main";
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import TableChoice from "./layout/tablechoice/TableChoice";

function App() {
  return (

      <BrowserRouter>

          <Routes>
                <Route path="/" element={<TableChoice/>}/>
                <Route path="/tablechoice" element={<h1>Это вторая страница</h1>}/>


              <div className="App">
                  <Header/>
                  <LeftSidebar/>
                  <RightSidebar/>
                  <Main/>
              </div>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
