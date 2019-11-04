import EntryModel from '../models/Entry';
import entriesu from '../models/Entry';
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import validation from '../helpers/validation';
import joi from 'joi';

class Entry {
	static async NewEntry(req, res) {
		joi.validate(req.body, validation.validator.Entrychema).then((result) => {		
		const entry = {
			id: uuidv4(),
			title:req.body.title,
			description: req.body.description,
			email: req.user.email,
			createdOn: moment(new Date())
		};
		const response = EntryModel.addNewEntry(entry);
		res.status(200).json({
			status: 200,
			data: {
			message: 'entry successfully created',
	        response 
			}
		});
	}).catch(error => res.send({
		"status": 400,
		"error" : {"message": error.details[0].message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '')}
	}));
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