import React, { useState } from "react";
import Input from "../components/Input";
import PrimaryCTAAlt from "../components/PrimaryCTAAlt";
import {InfoIcon} from '@chakra-ui/icons'

import styles from "./RegistrationForm.module.css";
import NavbarAlt from "../components/NavbarAlt";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({ name: "", email: "" });
  const [valid, setValid] = useState(false);

  const { name, email } = formData;
  const navigate= useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let error = "";
    let isValidEmail = false;

    if (name === "name") {
      error = value.trim() === "" ? "Name is required" : "";
    } else if (name === "email") {
       isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      error = !isValidEmail ? "Invalid email address" : "";
    }

    if (error === "" && isValidEmail) {
      setValid(true);
    }

    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    let valid = true;
    const newErrors = { name: "", email: "" };

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      valid = false;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!isValidEmail) {
      newErrors.email = "Invalid email address";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle form submission
      setValid(true);
      console.log("Form submitted successfully");
    }
  };

  return (
    <div className={[styles.container]}>
      <NavbarAlt showCross="true" />
      <div className={styles["container-form"]}>
        <p>Registration Form</p>
        <h1>
          Start your success
          <br />
          Journey here!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <Input
              holder="Enter your name"
              name="name"
              val={name}
              handleChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <p className={styles.error}><InfoIcon/>{errors.name}</p>}
            <Input
              holder="Enter your email"
              name="email"
              val={email}
              handleChange={handleChange}
              onBlur={handleBlur}
            />
             {errors.email && <p className={styles.error}><InfoIcon/>{errors.email}</p>}
          </div>
        </form>
        <PrimaryCTAAlt
          text="Submit"
          disabled={!valid}
          onClick={()=>navigate('/congrats')}
          width="417px"
          height="77px"
        />
      </div>
    </div>
  );
}
