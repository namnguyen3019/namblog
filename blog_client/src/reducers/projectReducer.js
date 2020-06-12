import { SIGN_UP } from '../actions/type'

const initState = {
    projects: [
        {id: "1", title: "first Project", body: " bla bla bla"},
        {id: "2", title: "second Project", body: " bla bla bla"},
        {id: "3", title: "third Project", body: " bla bla bla"}
    ]
}

const projectReducer = (state = initState , action ) => {
    switch(action.type){
        case "CREATE_PROJECT":
            console.log("Created a project", action.payload);
        case "GET_ALL_PROJECTS":
            console.log("get all projects", action.payload);
            return {...state, projects: action.payload}
               
        default:
            return state
    }
}

export default projectReducer;