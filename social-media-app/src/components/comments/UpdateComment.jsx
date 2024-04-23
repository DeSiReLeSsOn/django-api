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

            // Addingthe Modal here
        </>
    );
}

export default UpdateComment;