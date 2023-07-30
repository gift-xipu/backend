import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";

export default function Sidebar({ activeIndex = 1 }) {

  var [show, setShow] = useState(false); // State variable to toggle show/hide sidebar content
  const history  = useNavigate();// React Router hook for navigation

  var urls = [
    { name: "HTML", url: "/courses/pages/page1", id: 1 },
    { name: "CSS", url: "/courses/pages/css", id: 2 },
    { name: "Vanilla Javascript", url: "/courses/javascript", id: 3 },
    { name: "Node.js", url: "/courses/pages/nodejs", id: 4 },
    { name: "Database", url: "/courses/pages/database", id: 5 },
  ]; // Array of URLs for the course links

  return (
    <div className="sidebar">
      <div className="icons">
        {
           // If the activeIndex is not 1, show a back button
          activeIndex!==1&&<div  onClick={(e) =>history(-1)}>
         
          <svg
            width="50"
            height="20"
            viewBox="0 0 50 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.943233 10.7653C0.35533 11.3489 0.351891 12.2987 0.93555 12.8866L10.4469 22.467C11.0305 23.0549 11.9803 23.0584 12.5682 22.4747C13.1561 21.8911 13.1595 20.9413 12.5758 20.3534L4.12135 11.8375L12.6373 3.38297C13.2252 2.79931 13.2287 1.84957 12.645 1.26166C12.0613 0.673756 11.1116 0.670316 10.5237 1.25398L0.943233 10.7653ZM49.0054 10.5L2.00548 10.3298L1.99461 13.3298L48.9946 13.5L49.0054 10.5Z"
              fill="#E6E6E6"
            />
          </svg>
        </div>
        }

        {/*Show the course button with an SVG icon*/}
        <div onClick={(e) => setShow(show ? false : true)}>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.5714 37.625V40.9844C43.5714 42.0976 42.1084 43 40.3036 43H3.26786C1.46305 43 0 42.0976 0 40.9844V10.0781C0 8.96491 1.46305 8.0625 3.26786 8.0625H13.0714V32.9219C13.0714 35.5152 16.4919 37.625 20.6964 37.625H43.5714ZM43.5714 8.73438V0H20.6964C18.8916 0 17.4286 0.902412 17.4286 2.01562V32.9219C17.4286 34.0351 18.8916 34.9375 20.6964 34.9375H57.7321C59.537 34.9375 61 34.0351 61 32.9219V10.75H46.8393C45.042 10.75 43.5714 9.84297 43.5714 8.73438ZM60.0429 6.12842L51.0642 0.590326C50.4514 0.212348 49.6202 2.79497e-06 48.7536 0L47.9286 0V8.0625H61V7.55364C61 7.01908 60.6557 6.50642 60.0429 6.12842Z"
              fill="#E6E6E6"
            />
          </svg>
          Course
        </div>
      </div>

      <div className="content" style={{ display: show ? "block" : "none" }}>
        
        <div className="course-list">
          {urls.map((res, ind) => (
            <a href={res.url} key={ind}>
              <div className={`item ${activeIndex === res.id ? "active" : ""}`}>
                {res.name}
              </div>
            </a>
          ))}
        </div>

    
        <div className="course-list">
        </div>
      </div>
    </div>
  );
}