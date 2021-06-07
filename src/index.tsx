import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\' my first post', likesCount: 11},
    {id: 3, message: 'Blabla', likesCount: 11},
    {id: 4, message: 'Dada', likesCount: 11},
]


let dialogs = [
    {id: 1, name: 'Света'},
    {id: 2, name: 'Игорь'},
    {id: 3, name: 'Иван'},
    {id: 4, name: 'Петя'},
    {id: 5, name: 'Саша'},
    {id: 6, name: 'Виктор'},
]
let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it?'},
    {id: 3, message: 'I\'m fine'},
    {id: 4, message: 'How are you?'},
]

ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>, document.getElementById('root')
);

reportWebVitals();
