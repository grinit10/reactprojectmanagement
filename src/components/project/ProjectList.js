import React from 'react'
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => {

    let projectelements = projects && projects.map(proj => {
        return <ProjectSummary project={proj} key={proj.id}></ProjectSummary>
    })
    return (
        <div className="project-list section">
            {projectelements}
        </div>
    )
}

export default ProjectList