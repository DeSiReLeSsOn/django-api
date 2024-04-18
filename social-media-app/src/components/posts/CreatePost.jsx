import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import Toaster from "../Toaster";


function CreatePost(props) {
  const { refresh } = props;
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({
    body: "",
    image: null,
  });

  const user = getUser();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    const createPostForm = event.currentTarget;

    if (createPostForm.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);



    const formData = new FormData();
    formData.append("author", user.id);
    formData.append("body", form.body);
    if (form.image) {
      formData.append("image", form.image);
    }


    

    axiosService
      .post("/post/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        handleClose();
        setToastMessage("Post created 🚀");
        setToastType("success");
        setForm({ body: "", image: null });
        setShowToast(true);
        refresh();
      })
      .catch(() => {
        setToastMessage("An error occurred.");
        setToastType("danger");
      });
  };


  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };



  return (
    <>
      <Form.Group className="my-3 w-75">
        <Form.Control
          className="py-2 rounded-pill border-primary text-primary"
          type="text"
          placeholder="Write a post"
          onClick={handleShow}
        />
      </Form.Group>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title>Create Post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                name="body"
                value={form.body}
                onChange={(e) => setForm({ ...form, body: e.target.value })}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group contrilId="formFile" className="mb-3">
              <Form.Label>
                Post Image
              </Form.Label>
              <Form.Control type="file" onChange={handleImageChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleSubmit}
            disabled={form.body === "" && form.image === null}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
      <Toaster
        title="Post!"
        message={toastMessage}
        showToast={showToast}
        type={toastType}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}

export default CreatePost;