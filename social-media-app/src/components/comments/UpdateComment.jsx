import React, { useState, useContext } from "react";
import { Button, Modal, Form, Dropdown } from "reactbootstrap";
import axiosService from "../../helpers/axios";
import { Context } from "../Layout";


function UpdateComment(props) {
    const { postId, comment, refresh } = props;
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
        author: comment.author.id,
        body: comment.body, 
        post: postId,
    });

    const { toaster, setToaster } = useContext(Context);

    const handleSubmit = (event) => {
        // handle the modifacation of a comment
    };

    return (
        <>
            <Dropdown.Item 
                onClick={handleShow}>Modify</Dropdown.Item>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <Modal.Body className="border-0">
                    <Form noValidate validated={validated}
                        onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Control 
                                    name="body"
                                    value={form.body}
                                    onChange={(e) => setForm({ ...form,
                                        body: e.target.value })}
                                    as="textarea"
                                    rows={3}
                                />
                            </Form.Group>
                        </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Modify
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateComment;