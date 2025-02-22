import "./SoftProjCard.css";
import React from 'react'
import { FaExternalLinkAlt } from "react-icons/fa";

const SoftProjCard = (props) => {
    return (
        < div className="s-project-card" >
            <h2 className="s-project-title">{props.title}</h2>
            <a href={props.videolink}
                target="_blank"
                rel="noopener noreferrer">

                <img src={props.imgsrc} alt="" />
            </a>

            <div className="s-project-details">
                <p className="proj-card-text-header">Description:</p>
                <p>{props.text}</p>
                <p className="proj-card-text-header">Technologies Used:</p>
                <p>{props.text2}</p>
                <p></p>

                <div className="s-card-btns">
                    {props.viewlink && <a
                        href={props.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn">
                        <FaExternalLinkAlt className="s-play-icon"
                            size={30} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                        Open ScreenShots
                    </a>}
                </div>
            </div>
        </div >
    )
}

export default SoftProjCard