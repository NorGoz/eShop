import React from 'react';
import {Route, Routes} from 'react-router-dom';


import './App.css';

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
    console.log(props)
    return (
    <div>
        <h1>HATS PAGE</h1>
    </div>
)}
const HatsPageId = () => (
    <div>
        <h1>HATS PAGE IDDDDD</h1>
    </div>
)

function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/hats" element={<HatsPage/>}/>
            <Route path="/hats/:hatsId" element={<HatsPageId/>}/>
        </Routes>
    </div>
  );
}

export default App;
