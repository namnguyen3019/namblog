import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectSummary from "./ProjectSummary";
import { getAllProjects } from '../../actions/projectActions';

export class ProjectList extends Component {
    
    componentDidMount(){
        this.props.getAllProjects();
    }
    render() {
        const { projects } = this.props;
        return (
            <div>
                {projects.map((project) => (
                    <ProjectSummary key={project.id} project={project} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { projects: state.projects.projects };
};

export default connect(mapStateToProps, { getAllProjects })(ProjectList);
