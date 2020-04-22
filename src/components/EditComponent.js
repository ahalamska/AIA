import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function EditComponent(props) {
    const [rating, setRating] = useState(props.city.rating);
    const [validated, setValidated] = useState(false);

    function onSave(event) {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() !== false) {
            props.cityChange({...props.city, rating: rating});
        }
        setValidated(true);
    }

    function deleteItem() {
        props.cityDelete(props.city.id);
    }

    return (
        <div className='EditComponent'>
            <Modal show={props.show} onHide={() => props.onCloseClicked()}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.city.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form noValidate validated={validated} onSubmit={(event) => onSave(event)}>

                        <Form.Group controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control required as="select"
                                          defaultValue={props.city.rating}
                                          onChange={(event) => setRating(event.target.value)}>
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
                        <Button variant="outline-danger" onClick={() => deleteItem()}>
                            Delete
                        </Button>
                        <Button variant="outline-success" type="submit">
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}