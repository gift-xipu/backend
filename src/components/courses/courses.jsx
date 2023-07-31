import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useNavigate, Link } from 'react-router-dom';
import '../../styles/courses/courses.css'
import Header from '../header/header'

import HtmlPage from "./pages/htmlPage";
import CSSPage from "./pages/cssPage";
import JavascriptPage from "./pages/javascriptPage";
import NodePage from "./pages/nodejsPage";
import DatabasePage from "./pages/databasePage";

const Courses = () => {

    const navigate = useNavigate();

    // Example usage: Navigate to a different route
    const handleClick = () => {
      navigate('/courses/page1');
    };

    return(

        <div className="parent-container">

            
            <Header />
            

            <div className="child">
                <img src="/images/tech.jpg" alt="Technology courses" />
                <h2>Technology Courses</h2>
                <Link to="pages/page1">
                    <button className="link-button">Enroll</button>
                </Link>
            </div>
            <div className="child">
                <img src="/images/edu.jpg" alt="Education courses" />
                <h2>Education <br />Courses</h2>
                <button className="link-button">Enroll</button>
            </div>
            <div className="child">
                <img src="/images/science.jpg" alt="Science courses" />
                <h2>Science <br/> Courses</h2>
                <button className="link-button">Enroll</button>
            </div>
            <div className="child">
                <img src="/images/math.jpg" alt="Math courses" />
                <h2>Mathematics Courses</h2>
                <button className="link-button">Enroll</button>
            </div>

            

           
        </div>  

    );
}

export default Courses;