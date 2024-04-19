import React, { useState, useContext } from "react";
import { Button, Form, Image } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import { randomAvatar } from "../../utils";
import { Context } from "../Layout";

function CreateComment(props) {
    const { postId, refresh } = props;
    const [avatar, setAvatar ] = useState(randomAvatar());
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});

    const { toaster, setToaster } = useContext(Context);

    const handleSubmit = (event) => {
        
    };


    return (
        <Form>

        </Form>
    );
}

export default CreateComment;