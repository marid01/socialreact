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

import {RootStateType} from './redux/state';

type PropsType = {
    state: RootStateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <div className="con">
                <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path={"/dialogs"} render={ () => <Dialogs
                            dialogsPage={props.state.dialogsPage}/> }/>
                        <Route path={"/profile"} render={ () => <Profile
                            profilePage={props.state.profilePage}/> }/>
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
