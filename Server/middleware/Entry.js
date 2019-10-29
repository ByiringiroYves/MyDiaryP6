import EntryModel from '../models/Entry';
 class Entry {
// 	static async entryExists(req, res, next) {
// 		const { title } = req.body;
// 		if (EntryModel.findEntry(title)) {
// 			res.status(400).json({
// 				status: 400,
// 				error: {
// 					message: 'Entry is already exists'
// 				}
// 			});
// 		}
// 		next();
	// }
	static async entryExists(req, res, next) {
		const { id } = req.params;
		const { email } = req.user;
		const entry = EntryModel.findEntryById(id);
		if (!entry) {
			res.status(404).json({
				status: 404,
				error: {
					message: 'Entry doesnt exist'
				}
			});
		}
		if (entry.email !== email) {
			res.status(403).json({
				status: 403,
				error: {
					message: 'Access denied'
				}
			});
		}
		next();
	}
	
	static async entryExist(req, res, next) {
		const { id } = req.params;
		const { email } = req.user;
		const entry = EntryModel.findEntryById(id);
		if (!entry) {
			res.status(404).json({
				status: 404,
				error: {
					message: 'Entry doesnt exist'
				}
			});
		}
		if (entry.email !== email) {
			res.status(403).json({
				status: 403,
				error: {
					message: 'Access denied'
				}
			});
		}
		next();
	}
}

export default Entry;
