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
        const projectFinded = await Project.findById(projectID);
        return projectFinded;
    },
    get_user: async(_, {userID}) => {
        const userFinded = await User.findById(userID);
        return userFinded;
    }
}

export default Query