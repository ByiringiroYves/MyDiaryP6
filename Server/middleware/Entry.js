import EntryModel from '../models/Entry';
 class Entry {
	static async entryExists(req, res, next) {
		const { id } = req.params;
		const { email } = req.user[0];
		const entry = await EntryModel.findEntryById(id);
		if (!entry) {
			res.status(404).json({
				status: 404,
				error: {
					message: 'Entry doesnt exist'
				}
			});
		}
		if (entry[0].email !== email) {
	
			res.status(403).json({
				status: 403,
				error: {
					message: 'Access denied',
				}
			});
		}
		next();
	}
	
	
}

export default Entry;
