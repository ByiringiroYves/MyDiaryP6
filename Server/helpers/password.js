import bcrpt from 'bcrypt';

class password {
    async hashPassword(password){
        return  bcrpt.hash(password, bcrpt.genSaltSync(6));
    }
    async isCorrectPassword(pass_req,pass_res){
        return bcrpt.compare(pass_req, pass_res);
    }  
}
export default new password();