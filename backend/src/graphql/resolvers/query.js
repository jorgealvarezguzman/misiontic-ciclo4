import Project from "../../models/Project";
import User from "../../models/User";

const Query = {
    projects: async () => {
        return await Project.find();
    },
    users: async() =>{
        return await User.find();
    }
}

export default Query