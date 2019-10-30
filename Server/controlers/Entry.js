import EntryModel from '../models/Entry';
import entries from '../models/Entry';
import uuidv4 from 'uuid/v4';

class Entry {
	static async NewEntry(req, res) {
		const { title, description} = req.body;
		EntryModel.addNewEntry({ title, description, email:req.user.email, createdOn: new Date(), id: uuidv4()});
		res.status(200).json({
			status: 200,
			data: {
		    id: uuidv4(),
			message: 'entry successfully created',
	     	createdOn: new Date(),
			title,
			description,
			email: req.user.email
			}
		});
	}
	static async GetEntry(req, res){
		const { id } = req.params;
		const entry = await EntryModel.findEntryById(id);
		res.status(200).json({
			status: 200,
			data: entry
		});
	}
	static async GetEntries(req, res) {
		const entries = await EntryModel.getEntries(req.user.email);
		res.status(200).json({
			status: 200,
			data: entries
		});
	}
	static async DeleteEntry(req, res) {
		const { id } = req.params;
		    EntryModel.removeEntry(id).then(() => {
			res.status(200).json({
				status: 200,
				data: {
				message: 'entry successfully Deleted'
				}
			});
		});
	}
	static async Modify(req, res){
		const { id } = req.params;
		// const {title, description} = req.body;
		const entry = await EntryModel.findEntryById(id);
		entry.title = req.body.title;
		entry.description = req.body.description; 
		res.status(200).json({
			status: 200,
			 data: entry
		});
	}
}
    

export default Entry;