import ReactDOM from "react-dom/client";
import cakeImg from "url:../images/cake.png";
import cupcakeImg from "url:../images/cupcake.png";
import LogoImg from "url:../images/Logo.png";
import "./index.css";
import { useState } from "react";
import Header from "./components/Header.js";
import MainBody from "./components/MainBody.js";
/*
header
 - logo , links
body
 - searchbar with background image & wordingds, items list 
footer

- terms and conditions links 
*/


const Applayout = () => {
    return (
        <div className = " app">
            <Header/>
            <MainBody/>
            {/* header
            body
            footer */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);