import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

{/*Assignment1
import Bag from './assignment1/functionComponent/wildcraftf';
import Description from './assignment1/classComponent/wildcraftc';
import './assignment1/global.css' */}

// Assignment2
import Headerf from './assignment2/Headerf';
import Bodyc from './assignment2/Bodyc';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    {/* Assignment1
    <Bag/>
    <Description/> */}

    {/* Assignment2 */}
    <Headerf />
    <Bodyc />


  </div>
);

reportWebVitals();
