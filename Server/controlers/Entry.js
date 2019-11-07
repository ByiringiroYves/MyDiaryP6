import EntryModel from "../models/Entry";
import uuidv4 from "uuid/v4";
import moment from "moment";
class Entry {
  static async NewEntry(req, res) {
    const entry = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      email: req.user[0].email,
      createdOn: moment(new Date())
    };
    const response = await EntryModel.addEntry(entry);
    return res.status(200).send({
      status: 200,
      data: {
        message: "entry successfully created",
        entry: response
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
		const entries = await EntryModel.getEntries(req.user[0].email);
		res.status(200).json({
			status: 200,
			data: entries
		});
}
static async Modify(req, res){ 
  const {email} = req.user[0];
  console.log(email);
  const { id } = req.params; 
  const Entry = {
    id, 
    title: req.body.title,
    description: req.body.description,
    email: req.user[0].email,
    createdOn: new Date()
  };
  await EntryModel.updateEntry(Entry);
  return res.status(200).json({
     status: 200,
      data:{
        message: "entry successfully edited",
        Entry
      } 
  });
  };
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
