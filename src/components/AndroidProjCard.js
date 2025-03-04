import "./AndroidProjCard.css";
import React from 'react'
import { FaGooglePlay } from "react-icons/fa";

const AndroidProjCard = (props) => {
    return (
        < div className="a-project-card" >
            <h2 className="a-project-title">{props.title}</h2>
            <a href={props.videolink}
                target="_blank"
                rel="noopener noreferrer">

                <img src={props.imgsrc} alt="" />
            </a>

            <div className="a-project-details">                
                <p className="proj-card-text-header">Description:</p>
                <p>{props.text}</p>
                <p className="proj-card-text-header">Technologies Used:</p>
                <p>{props.text2}</p>
                <p></p>

                <div className="a-card-btns">
                    {props.viewlink && <a
                        href={props.viewlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn">
                        <FaGooglePlay className="a-play-icon"
                            size={30} style={{ color: "#faf7ff", marginRight: "3rem" }} />
                        Visit Application Link
                    </a>}
                </div>
            </div>
        </div >
    )
}

export default AndroidProjCard