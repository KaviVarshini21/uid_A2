import React from 'react';
import './wildcraftc.css';

class Description extends React.Component{
    render(){
       return(
       <>
        <ul>
            <li>Material : Polyster Wrinkle Fabric</li>
            <li>Three compartment backpack for better organisation,Hidden zipper pocket on back which secures things when worn</li>
            <li>Shoulder webbing construction with non dangle straps,Pack with trendy statement puller tag,Inbuilt rain cover to sheild pack from rain</li>
            <li>Quick access front flat pocket to store basic essentials,Quick grab padded haul loop for ease of carrying</li>
            <li>The Polyster wrinkle fabric has a unique look which is resistant to external stress and retain their shape.The fabrics made from nylon materials inherit resilience and are lightweight</li>
        </ul>
        <div className="offerDetails">
            <table id="offer">
                <tr><td>Save Extra with 3 offers</td></tr>
                <tr><td>No Cost EMI: Avail No Cost EMI on select cards for orders above ₹3000 Details</td></tr>
                <tr><td>Bank Offer (5): 10% Instant Discount up to INR 500 on RBL Credit Card Transactions. Minimum purchase value INR 2000 See All</td></tr>
                <tr><td>Partner Offers: Get GST invoice and save up to 28% on business purchases. <a href="#">Sign up</a> for free Details</td></tr>
            </table>
        </div>
       
        </>
        );
    }
};
export default Description;