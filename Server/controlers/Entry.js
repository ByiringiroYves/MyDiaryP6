/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// import Password from '../helpers/password';
import EntryModel from '../models/Entry';
// import idgen from '../helpers/Id';
import uuidv4 from 'uuid/v4';
class Entry {
	static async NewEntry(req, res) {
		const { title, description} = req.body;
		EntryModel.addNewEntry({ title, description});
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
		const entry = await EntryModel.findEntryByI(id).then(() => {
		res.status(200).json({
			status: 200,
			data: entry
		})
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
	static async ModifyEntry(req, res) {
		const { id } = req.params;
		const entry = await EntryModel.modifyEntry(id).then(() => {
			res.status(200).json({
				status: 200,
				data: {
				message:'entry successfully Edited',	
				entry
				}
			})
		})
		   
	}
}
    

export default Entry;
