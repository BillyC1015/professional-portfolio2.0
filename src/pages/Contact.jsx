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



export default function Contact(){
    return(
        <>
       <p>Mechanicsburg, PA</p>
       <ButtonMailto label="Write me an E-Mail" mailto="mailto:william.cody1015@gmail.com" />

            
            
            <p><Link to= "https://www.linkedin.com/in/williamcody15/">LinkedIn</Link> </p>

            <p><Link to= "https://github.com/BillyC1015">Github</Link> </p>
       
        </>
    )
}