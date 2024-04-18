import React from "react";
import { Link } from "react-router-dom";

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;

export default function Contact(){
    return(
        <>
       <p>Mechanicsburg, PA</p>
       <ButtonMailto label="Write me an E-Mail" mailto="mailto:no-reply@example.com" />
            <p>Phone: 717-557-2662</p>
            <p>Linkedin: https://www.linkedin.com/in/williamcody15/</p>
            <p>Github: https://github.com/BillyC1015</p>
       
        </>
    )
}