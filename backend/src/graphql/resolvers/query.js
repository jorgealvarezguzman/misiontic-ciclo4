import Project from "../../models/Project";

const Query = {
    projects: async () => {
        return await Project.find()
    }
}

export default Query