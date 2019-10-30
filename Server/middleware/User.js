import UserModel from '../models/User';
class User {
	static async userNotExists(req, res, next) {
		const { email } = req.body;
		const user = await UserModel.findUser(email);
		if (user) {
			res.status(400).json({
				status: 400,
				error: {
					message: 'Email is already exists'
				}
			});
		}
		next();
	}
}

export default User;
