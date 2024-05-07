import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from './layout/header/Header';
import {LeftSidebar} from './layout/leftsidebar/LeftSidebar';
import {RightSidebar} from "./layout/rightSidebar/RightSidebar";
import {Main} from "./layout/main/Main";
import {useNavigate, Routes, Route} from "react-router-dom";
import {CSSTransition, SwitchTransition} from 'react-transition-group';

import {LoginPage} from "./layout/loginpage/LoginPage";
import {ScreenSaver} from "./layout/screensaver/ScreenSaver";
import {TableChoice} from "./layout/tablechoice/TableChoice";
import {Modal} from "./components/modal/Modal";


function App() {
    const [interactionDetected, setInteractionDetected] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
    const navigate = useNavigate();

    const [modalActive, setModalActive] = useState(false);

    const resetInteraction = () => {
        if (timer) {
            clearTimeout(timer);
        }

        setTimer(setTimeout(() => {
            setInteractionDetected(false);
        }, 12000000));
    };

    useEffect(() => {
        const handleInteraction = () => {

            if (!interactionDetected) {
                setInteractionDetected(true);
                resetInteraction();
                navigate('/online-shop');
            }
        };

        window.addEventListener('mousemove', handleInteraction);
        window.addEventListener('keydown', handleInteraction);

        return () => {
            window.removeEventListener('mousemove', handleInteraction);
            window.removeEventListener('keydown', handleInteraction);
        };
    }, [interactionDetected]);

    return (


        <SwitchTransition>
            <CSSTransition
                key={interactionDetected ? "App" : "ScreenSaver"}
                addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                }}
                classNames="fade"
            >
                {interactionDetected ? (
                    <div className='App-wrapper'>
                        <Routes>
                            <Route path="/online-shop" element={<LoginPage/>}/>
                            <Route path="/app" element={
                                <div className="App">
                                    <Header showCustomer={false}/>
                                    <LeftSidebar/>
                                    <RightSidebar onClcik={() => setModalActive(true)}/>
                                    <Main/>
                                    <Modal active={modalActive} setActive={setModalActive}/>
                                </div>
                            }/>
                            <Route path="/tablechoice" element={<TableChoice/>}/>
                        </Routes>
                    </div>

                ) : <ScreenSaver/>}
            </CSSTransition>
        </SwitchTransition>

    );
}

export default App;