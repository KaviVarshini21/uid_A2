import React from "react";
import img1 from "../assignment2/bag2.jpg";
import img2 from "../assignment2/bag1.jpg";
import img3 from "../assignment2/bag3.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./Bodyc.css";

class Features extends React.Component{
    render(){
        return(
            <div className="Feature">
                <ul className="item-comp">
                    <h1>Features</h1>
                    <li className="item-comp-li"><p>Discreet looks</p></li>
                    <li className="item-comp-li"><p>Comfortable straps</p></li>
                    <li className="item-comp-li"><p>Water bottle pocket</p></li>
                    <li className="item-comp-li"><p>Thoughtful compartments and organization</p></li>
                    <li className="item-comp-li"><p>Quick-access and/or security pockets</p></li>
                    <li className="item-comp-li"><p>Smooth and/or silent zippers and openings</p></li>
                    <li className="item-comp-li"><p>Quick-Grab haul loop for ease of carrying</p></li>
                    <li className="item-comp-li"><p>Padded system at the back for comfort</p></li>

                </ul>
            </div>
        );
    }
}
class Products extends React.Component{
    render(){
        return(
            <>
                <Card style={{ width: '17rem' }}>
                    <Card.Img variant="top" src={img1} height={450} width={400} />
                    <Card.Body>
                        <Card.Title>Wildcraft Turnaround Polyester 14 inch 27 Ltrs Blue Laptop Bag</Card.Title>
                        <Card.Text className="rupee">
                        ₹1,497
                        </Card.Text>
                        <Button variant="primary">Add to card</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={img2} height={450} width={400}  />
                <Card.Body>
                    <Card.Title>Wildcraft Turnaround Polyester 14 inch 27 Ltrs Black Laptop Bag</Card.Title>
                    <Card.Text className="rupee">
                    ₹1,497
                    </Card.Text>
                    <Button variant="primary">Add to card</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '17rem' }}>
                <Card.Img variant="top" src={img3} height={450} width={400}  />
                <Card.Body>
                    <Card.Title>Wildcraft Turnaround Polyester 14 inch 27 Ltrs Blue Laptop Bag
                    </Card.Title>
                    <Card.Text className="rupee">
                    ₹1,497
                    </Card.Text>
                    <Button variant="primary">Add to card</Button>
                </Card.Body>
                </Card>
            </>
        );
    }
}
class Bodyc extends React.Component{
    render(){
        return(
            <>
                <Features />
                <Products />
            </>
        );
    };
}
export default Bodyc;