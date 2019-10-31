import EntryModel from '../models/Entry';
import entriesu from '../models/Entry';
import uuidv4 from 'uuid/v4';
import moment from 'moment';

class Entry {
	static async NewEntry(req, res) {
		const { title, description} = req.body;
		EntryModel.addNewEntry({ title, description, email:req.user.email, createdOn: new Date(), id: uuidv4()});
		res.status(200).json({
			status: 200,
			data: {
		    id: uuidv4(),
			message: 'entry successfully created',
			title,
			description,
			email: req.user.email,
			createdOn : moment(new Date())
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
		// const {entry} = 
		// const {title, description} = req.body; 
		const {email} = req.user;
		console.log(email);
		const { id } = req.params; 
		// const entry = await 
		// const {title, description} = req.body;
		// const position = await EntryModel.getEntryPosition(id, req.user.email); 
		const Modify = {
			id, 
			title: req.body.title,
			description: req.body.description,
			email: req.user.email,
			UpdatedOn: new Date()
		};
		await EntryModel.updateEntry(id, email,Modify);
		return res.status(200).json({
			 status: 200,
			  Modify

		});
		};

}
    

export default Entry;