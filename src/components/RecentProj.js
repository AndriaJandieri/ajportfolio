import "./RecentProjCard.css";
import RecentProjCard from "./RecentProjCard";
import RecentProjCardData from "./RecentProjCardData";
import React from 'react'

const RecentProj = () => {
    return (
        <div className="r-container">
            <h1 className="r-card-heading">Recent Projects</h1>
            <div className="r-card-container">
                {RecentProjCardData.map((value, index) => {
                    return (
                        <RecentProjCard
                            key={index}
                            imgsrc={value.imgsrc}
                            title={value.title}
                            text={value.text}
                            text2={value.text2}
                            viewlink={value.viewlink}
                            sourcelink={value.sourcelink}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default RecentProj