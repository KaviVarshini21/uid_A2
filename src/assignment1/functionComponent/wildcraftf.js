import React from 'react';
import img1 from './Resources/1.jpeg';
import './wildcraftf.css';
function Bag(){
    return(
        <>
            <h1 className='heading'>WILDCRAFT</h1>
            <div className='image1'>
                <center><img src={img1} height={300} width={300}></img></center>
            </div>
            <h3>Wildcraft 37.5 Ltrs Pack 4 Canvas Navy Casual Backpack (12257_Canvas_Navy)(HxWxD : 15 x 10 x 5)(centimeters)</h3>
        </>
    );
}
export default Bag;
