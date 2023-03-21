import React, { useState } from "react";
import { Card } from "../card/Card";
import axios from "axios";
// import { useState } from "react";

export const Main = () => {
    // const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/comics?ts=1&apikey=ecd43655f9c4b50cd889f75bca700059&hash=f94351145d2d0df792e8a0a0a1b5b661")


    return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/comic.webp" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/pngegg.png" alt="" />
                    <input type="search" placeholder="Search Here" className="search"/>
                </div>
            </div>
            <div className="content">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}