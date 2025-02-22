import "./RecentProjCard.css";
import React from 'react'
//import { FaGooglePlay } from "react-icons/fa";

const RecentProjCard = (props) => {
    return (
        < div className="r-project-card" >
            <h2 className="r-project-title">{props.title}</h2>
            <a href={props.videolink}
                target="_blank"
                rel="noopener noreferrer">

                <img src={props.imgsrc} alt="" />
            </a>

            <div className="r-project-details">
                <p className="proj-card-text-header">Description:</p>
                <p>{props.text}</p>
                <p className="proj-card-text-header">Technologies Used:</p>
                <p>{props.text2}</p>
                <p></p>

                <div className="r-card-btns">
                  <a href={props.viewlink} target="_blank" rel="noopener noreferrer" className="btn">Game &nbsp; Link</a>
                  <a href={props.sourcelink} target="_blank" rel="noopener noreferrer" className="btn">Source &nbsp; Code</a>
                </div>
            </div>
        </div >
    )
}

export default RecentProjCard