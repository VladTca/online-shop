import React from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";
import {Main} from "./layout/main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {LoginPage} from "./layout/loginpage/LoginPage";


function App() {
  return (

      <BrowserRouter>
          <div className='App-wrapper'>
              <Routes>
                  <Route path="/online-shop" element={<LoginPage/>}/>
                  <Route path="/app" element={
                      <div className="App">
                          <Header/>
                          <LeftSidebar/>
                          <RightSidebar/>
                          <Main/>
                      </div>
                  }/>
                  {/*<Route path="/tablechoice" element={<TableChoice/>}/>*/}
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
