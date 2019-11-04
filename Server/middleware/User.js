import UserModel from '../models/User';
class User {
	static async userNotExists(req, res, next) {
		const { email } = req.body;
		const user = await UserModel.getUserByEmail(email);
		if (user.length > 0) {
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
