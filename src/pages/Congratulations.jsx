import React, { useEffect } from "react";
import NavbarAlt from "../components/NavbarAlt";
import { CheckCircleIcon } from "@chakra-ui/icons";

import styles from "./Congratulations.module.css";
import { useNavigate } from "react-router-dom";

export default function Congratulations() {
  const navigate = useNavigate("");

  useEffect(() => {
    // Set a timeout to redirect after 5 seconds
    const timeoutId = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <NavbarAlt showCross={false}/>
      <div className={styles["container-content"]}>
        <CheckCircleIcon w={10} h={10} color={"green"} mb={10}/>
        <p className={styles.success}>Success Submitted</p>
        <h1>Congratulations</h1>
        <p className={styles.description}>
          Your request has been successfully submitted to us. We will validate
          your information and reach out to your shortly with updates
        </p>
        <p className={styles.redirect}>
          Redirecting you to Homepage in <strong>5 Seconds</strong>
        </p>
      </div>
    </div>
  );
}
