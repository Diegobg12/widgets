import React, { useState } from 'react';
import Accordion from "./components/Accordion.js"
import SearchBar from "./components/SearchBar.js"
import Dropdown from "./components/Dropdown.js"
import Translate from "./components/Translate"
import Router from './components/Router.js';
import Header from './components/Header'

const items = [
    {
        title:"What is React?",
        content: "Is a JS framework"
    },
    {
        title: "Why React?",
        content: "Because is popular"
    },
    {
        title: "How to use it?",
        content: "By creating components"
    },
]



const options = [
{label: "Color Red", value: "red"},
{label: "Color Blue", value: "blue"},
{label: "Color Green", value: "green"}
]
export default()=>{

    const [selected, setSelected] = useState(options[0])
    return (
        <div>
            <Header />
            <Router path = "/" >
                {/* The element inside the Router component is its children */}
                 <Accordion items = {items} />    
            </Router>
            <Router path="/list">
                <SearchBar />
            </Router>

            <Router path="/dropdown">
                <Dropdown 
                    label="Select a Color"
                    options = {options}
                    selected = {selected}
                    onSelectedChange = {setSelected}
                />
            </Router>

            <Router path="/translate">
                <Translate />
            </Router>
        </div>
    )
}