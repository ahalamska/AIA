import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

export default function AddComponent(props) {
    const [city, setCity] = useState({
        id: '-1',
        title: "title",
        description: '',
        img: 'https://lh3.googleusercontent.com/proxy/jiVnHada3IdGhK995KRHOn3lT_8qArfo9q5HijZgamc-e2A0f-P3WNTmXRD85lWV31c8keI7Ylk1bMKTnEHA6xxibAJgeHEeDoPtsUL7y_bi5mQG3bMLeL3DiCBX',
        rating: '1'
    });

    function onSave(event) {
        event.preventDefault();
        event.stopPropagation();
        props.cityAdded(city);

    }

    return (
        <div className='AddComponent'>
            <Modal show={props.show} onHide={() => props.onCloseClicked()}>
                <Modal.Header closeButton>
                    <Modal.Title>Adding new place</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form onSubmit={(event) => onSave(event)}>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Name"
                                          onChange={(event) => setCity({...city, title: event.target.value})}/>
                            <br />
                            <Form.Control type="text" placeholder="description"
                                          onChange={(event) => setCity({...city, description: event.target.value})}/>
                            <br />
                            <Form.Control  type="text" placeholder="Link to image"
                                           onChange={(event) => setCity({...city, img: event.target.value})}/>
                        </Form.Group>

                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control required as="select"
                                          onChange={(event) => setCity({...city, rating: event.target.value})}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}