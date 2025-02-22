import "./SoftProjCard.css";
import SoftProjCard from "./SoftProjCard";
import SoftProjCardData from "./SoftProjCardData";
import React from 'react'

const SoftProj = () => {
    return (
        <div className="s-container">
            <h1 className="s-card-heading">Software Development</h1>
            <div className="s-card-container">
                {SoftProjCardData.map((value, index) => {
                    return (
                        <SoftProjCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}                            
                            text2={value.text2}
                            viewlink={value.viewlink}
                            //videolink={value.videolink}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default SoftProj