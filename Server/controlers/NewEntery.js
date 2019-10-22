
class Entry {
    static async NewEntry(req, res){
       const { title, description } = req.body;
       res.status(200).json({
           status: 200,
           data: {
               message : "entry successfully created",
               createdOn: new Date(),
               title,
               description
           } 
       });
    }
}

export default Entry; 