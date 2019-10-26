/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// import Password from '../helpers/password';
import EntryModel from '../models/Entry';
// import idgen from '../helpers/Id';
import uuidv4 from 'uuid/v4';
class Entry {
	static async NewEntry(req, res) {

		const { title, description} = req.body;
		// const Idgenerator = await idgen.Idgenerator();
		EntryModel.addNewEntry({ title, description});
		res.status(200).json({
			status: 200,
			data: {
		    id: uuidv4(),
			message: 'entry successfully created',
	     	createdOn: new Date(),
			 title,
			 description
			}
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
}
    

export default Entry;
