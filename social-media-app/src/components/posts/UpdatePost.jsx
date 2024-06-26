import React, { useState } from "react";
import { Button, Modal, Form, Dropdown } from "react-bootstrap";
import axiosService from "../../helpers/axios"; 
import Toaster from "../Toaster";


function UpdatePost(props) {
    const { post, refresh } = props;
    const [show, setShow] = useState(false);
    const [showToast, setShowToast] = useState(false);
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({
      author: post.author.id,
      body: post.body,
      image: post.image,
    });
    const [imageFile, setImageFile] = useState(null);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const handleImageChange = (e) => {
      setImageFile(e.target.files[0]);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const updatePostForm = event.currentTarget;
  
      if (updatePostForm.checkValidity() === false) {
        event.stopPropagation();
      }
  
      setValidated(true);
  
      const data = new FormData();
      data.append("author", form.author);
      data.append("body", form.body);
  
      if (imageFile) {
        data.append("image", imageFile);
      }
  
      axiosService
        .put(`/post/${post.id}/`, data)
        .then(() => {
          handleClose();
          setShowToast(true);
          refresh();
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <>
        <Dropdown.Item onClick={handleShow}>Modify</Dropdown.Item>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="border-0">
            <Modal.Title>Update Post</Modal.Title>
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
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Post Image</Form.Label>
                <Form.Control type="file" onChange={handleImageChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Modify
            </Button>
          </Modal.Footer>
        </Modal>
        <Toaster
          title="Success!"
          message="Post updated 🚀"
          type="success"
          showToast={showToast}
          onClose={() => setShowToast(false)}
        />
      </>
    );
  }
  
  export default UpdatePost;