import React, {useEffect, useState} from 'react';
import './App.css';
import { Header } from './layout/header/Header';
import { LeftSidebar } from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";
import {Main} from "./layout/main/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import {LoginPage} from "./layout/loginpage/LoginPage";
import {ScreenSaver} from "./layout/screensaver/ScreenSaver";


function App() {
return (<ScreenSaver/>);}
//     const [interactionDetected, setInteractionDetected] = useState(false);
//     const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
//
//     const resetInteraction = () => {
//         if (timer) {
//             clearTimeout(timer);
//         }
//
//         setTimer(setTimeout(() => {
//             setInteractionDetected(false);
//         }, 60000));
//     };
//
//     useEffect(() => {
//         const handleInteraction = () => {
//             setInteractionDetected(true);
//             resetInteraction();
//         };
//
//         window.addEventListener('mousemove', handleInteraction);
//         window.addEventListener('keydown', handleInteraction);
//
//         return () => {
//             window.removeEventListener('mousemove', handleInteraction);
//             window.removeEventListener('keydown', handleInteraction);
//         };
//     }, []);
//
//
//       return interactionDetected ? (
//
//       <BrowserRouter>
//           <div className='App-wrapper'>
//               <Routes>
//                   <Route path="/online-shop" element={<LoginPage/>}/>
//                   <Route path="/app" element={
//                       <div className="App">
//                           <Header/>
//                           <LeftSidebar/>
//                           <RightSidebar/>
//                           <Main/>
//                       </div>
//                   }/>
//                   {/*<Route path="/tablechoice" element={<TableChoice/>}/>*/}
//               </Routes>
//           </div>
//       </BrowserRouter>
//   ) : <ScreenSaver/>;
// }

export default App;
