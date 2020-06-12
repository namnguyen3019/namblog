import { db } from "../config/firebase";
import ProjectSummary from "../components/projects/ProjectSummary";

export const createProject = (project) => {
    return (dispatch) => {
        //Make async actions . Create a new project in database
        db.collection("projects")
            .add(project)
            .then(() => {
                dispatch({
                    type: "CREATE_PROJECT",
                    payload: project,
                });
            })
            .catch((err) => console.log(err));
    };
};

export const getAllProjects = () => {
    return (dispatch) => {
        db.collection("projects")
            .get()
            .then((snapshot) => {
                const projects = [];
                snapshot.forEach((doc) => {
                    projects.push(doc.data())
                });
                dispatch({
                    type: "GET_ALL_PROJECTS",
                    payload: projects,
                });
            })
            .catch((err) => console.log(err));
    };
};
