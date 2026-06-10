export default async function getAllUsers(req,res,next) {
    return res.status(200).json({"userId":"05e96170-5575-4033-bb70-87fc6d3d804c","userName":"John-Doe"});
}