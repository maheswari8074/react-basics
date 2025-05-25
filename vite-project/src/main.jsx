import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';


import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App | APP</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } 
// ->cant write react elements like this in react (raw objects)

const anotherElement = (
    <a href="https://google.com" target='_blank'>✌️Visit google✌️</a>
);

const anotherUser ="Bhuvana"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    //this is called as tree after this we cann add varbles
    anotherElement
)
createRoot(document.getElementById('root')).render(
 
   

   reactElement
  
);
