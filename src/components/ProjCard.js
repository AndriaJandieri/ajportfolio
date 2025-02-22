import "./ProjCard.css";
import React from 'react'

const ProjCard = (props) => {
    return (
        <div className="project-card">
            <h2 className="project-title">{props.title} </h2>
            <img src={props.imgsrc} alt="" />
            
            <div className="project-details">
                <p className="proj-card-text-header">Description:</p>
                <p>{props.text}</p>
                <p className="proj-card-text-header">Technologies Used:</p>
                <p>{props.text2}</p>
                <p></p>
                <div className="card-btns">
                    <a href={props.viewlink} target="_blank" rel="noopener noreferrer" className="btn">View &nbsp; Live</a>
                    <a href={props.sourcelink} target="_blank" rel="noopener noreferrer" className="btn">Source &nbsp; Code</a>
                </div>
            </div>
        </div>
    )
}

export default ProjCard