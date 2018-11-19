import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card a-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by anonymous</p>
                <p className="grey-text">2nd October, 2 A.M</p>
            </div>
        </div>
    )
}

export default ProjectSummary