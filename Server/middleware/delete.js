import EntryModel from '../models/Entry';
class Entry {
	static async delete(req, res, next) {
		const { id } = req.body;
		if (!EntryModel.removeEntry(id)) {
			res.status(200).json({
				status: 200,
				error: {
					message: 'gfhgyiftufuftyftydtydtdstrstrsrttrdtrd'
				}
			});
		}
		next();
	}
}

export default Entry;
