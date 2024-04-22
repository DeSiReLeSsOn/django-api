import React, { useState, useContext } from "react";
import { format } from "timeago.js";
import { Image, Card, Dropdown } from "react-bootstrap";
import { randomAvatar } from "../../utils";
import axiosService from "../../helpers/axios";
import { getUser } from "../../hooks/user.actions";
import { Context } from "../Layout";
import MoreToggleIcon from "../MoreToggleIcon";


function Comment(props) {
    const { postId, comment, refresh } = props;
    const { toaster, setToaster } = useContext(Context); 

    const user = getUser();

    const handleDelete = () => {
        axiosService
            .delete(`/post/${postId}/comment/${comment.id}/`)
            .then(() => {
                setToaster({
                    type: "danger",
                    message: "Comment deleted 🚀",
                    show: true,
                    title: "Comment Deleted",
                });
                refresh();
            })
            .catch((err) => {
                setToaster({
                    type: "warning",
                    message: "Comment deleted 🚀",
                    show: true,
                    title: "Comment Deleted",
                });
            });
    };

    return (
        <Card className="rounded-3 my-2">
            <Card.Body>
                <Card.Title className="d-flex flex-row justify-content-between">
                    <div className="d-flex flex-row">
                        <Image 
                            src={randomAvatar()}
                            roundedCircle
                            width={48}
                            height={48}
                            className="me-2 border border-primary border-2"
                        />
                        <div className="d-flex flex-column justify-content-start align-self-center mt-2">
                            <p className="fs-6 m-o">{comment.author.name}</p>
                            <p className="fs-6 fw-lighter">
                                <small>{format(comment.created)}</small>
                            </p>
                        </div>
                    </div>
                    {user.name === comment.author.name && (
                        <div>
                            <Dropdown>
                                <Dropdown.Toggle as={MoreToggleIcon}></Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        Modify 
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={handleDelete}
                                        className="text-danger">
                                            Delete
                                        </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    )}
                </Card.Title>
                <Card.Text>{comment.body}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Comment;