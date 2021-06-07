import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App(props: any) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <div className="con">
                <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path={"/dialogs"} render={ () => <Dialogs dialogs={dialogs}/> }/>
                        <Route path={"/profile"} render={ () => <Profile /> }/>
                        <Route path={"/news"} render={ () => <News /> }/>
                        <Route path={"/music"} render={ () => <Music /> }/>
                        <Route path={"/settings"} render={ () => <Settings /> }/>
                    </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
