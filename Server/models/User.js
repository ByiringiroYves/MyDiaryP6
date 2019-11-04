import { GET_USER_BY_EMAIL, CREATE_USER } from '../db/helpers/query';
import { query } from '../db/helpers/db';
class User {
  async addUser(user) {
    const values = [user.id, user.firstName, user.lastName, user.email, user.password, user.createdOn]
    const res = await query(CREATE_USER, values);
    return res.rows;
  }
  async getUserByEmail(email) {
    const res = await query(GET_USER_BY_EMAIL, [email]);
    return res.rows;
  }
  async getUserById(id) {
    return this.userList.find(user => user.id === id);
  }
}

export default new User();
