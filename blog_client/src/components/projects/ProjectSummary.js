import React from "react";

const ProjectSummary = ({project}) => {
    return (
        <div className="row" key={project.id}>
            <div className="card blue-grey darken-1">
                <div className="card-content white-text">
                    <span className="card-title">{project.title}</span>
                    <p>{project.body}</p>
                </div>
                <div className="card-action">
                    <a href="#">Details</a>
                    <a href="#">Edit</a>
                    <a href="#">Delete</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectSummary;
