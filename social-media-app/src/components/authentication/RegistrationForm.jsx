import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function RegistrationForm() {
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [form, setForm] = useState({});
    const [error, setError] = useState(null);
}