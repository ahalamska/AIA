import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../styles/City.scss";

export default function City(props) {

    return (
        <div className='City'>
            <Card style={{width: '18rem'}} bg="light" >
                <Card.Img variant="top" src={props.img}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <div>{props.rating}</div>
                    <Button variant="outline-success" onClick={() => props.toggleEdit(props.id)}>Edit place</Button>
                </Card.Body>
            </Card>
        </div>
    )
}