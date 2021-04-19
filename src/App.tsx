import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <div className='con'>
                <Nav/>
                    <div className='app-wrapper-content'>
                        <Route path={"/dialogs"} component={Dialogs}/>
                        <Route path={"/profile"} component={Profile}/>
                    </div>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
