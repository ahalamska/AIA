import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function Modal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='Modal'>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

        </div>
    )
}