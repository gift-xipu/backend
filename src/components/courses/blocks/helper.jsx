import React, {useState} from "react";
import { Tooltip } from "react-tooltip";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function Helper({ text }) {

  // Generate a unique ID using the current timestamp and a random number
  var uid = `${new Date().getTime().toString(36)}-${Math.floor(
    new Date().valueOf() * Math.random()
  )}`;

  const history = useNavigate();

  const Clicked = ()=> (
    history("/chatbot")
  )

  return (
    <>
        {/* Anchor element with a dynamically generated id */}
        
        <button onClick={Clicked} className="helper" id={`not-${uid}`}>
        {/* SVG element */}
            <svg
            style={{ transform: "scale(0.5)" }}
            width="54"
            height="50"
            viewBox="0 0 54 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            {/* Path element defining the shape */}
            <path
                d="M27 0C12.15 0 0 10 0 22.2222C0 28.3333 2.97 33.8889 7.56 37.5C7.56 39.1667 6.48 43.6111 0 50C6.48 49.7222 12.42 47.2222 17.55 43.0556C20.52 43.8889 23.76 44.4444 27 44.4444C41.85 44.4444 54 34.4444 54 22.2222C54 10 41.85 0 27 0ZM27 38.8889C15.12 38.8889 5.4 31.3889 5.4 22.2222C5.4 13.0556 15.12 5.55556 27 5.55556C38.88 5.55556 48.6 13.0556 48.6 22.2222C48.6 31.3889 38.88 38.8889 27 38.8889ZM27.54 9.72222C25.11 9.72222 23.22 10.2778 21.87 11.1111C20.25 12.2222 19.44 13.8889 19.71 15.8333H25.11C25.11 15 25.38 14.4444 25.92 14.1667C26.46 13.8889 27 13.6111 27.81 13.6111C28.62 13.6111 29.43 13.8889 29.97 14.4444C30.51 15 30.78 15.5556 30.78 16.3889C30.78 17.2222 30.51 17.7778 30.24 18.3333C29.7 18.8889 29.16 19.4444 28.62 19.7222C27.27 20.5556 26.19 21.3889 25.65 21.9444C24.57 22.7778 24.3 23.6111 24.3 25H29.7C29.7 24.1667 29.97 23.6111 29.97 23.0556C30.24 22.5 30.78 22.2222 31.32 21.6667C32.67 21.1111 33.48 20.2778 34.29 19.1667C35.1 18.0556 35.37 16.9444 35.37 15.8333C35.37 13.8889 34.56 12.2222 33.21 11.1111C32.13 10.2778 29.97 9.72222 27.54 9.72222ZM24.3 27.7778V33.3333H29.7V27.7778H24.3Z"
                fill="#31C1C1"
            />
            </svg>
        </button>
        
      
      {/* Tooltip component anchored to the element with the unique ID */}     
      <Tooltip anchorSelect={`#not-${uid}`}>{text}</Tooltip>
    </>
  );
}