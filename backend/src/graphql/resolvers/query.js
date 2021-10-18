import Project from "../../models/Project";
import User from "../../models/User";

const Query = {
    projects: async () => {
        return await Project.find();
    },
    users: async() =>{
        return await User.find();
    },
    get_project: async(_, {projectID}) => {
        return await Project.findById(projectID);
    },
    get_user: async(_, {userID}) => {
        return await User.findById(userID);
    }
}

export default Query