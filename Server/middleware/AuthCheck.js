import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import userModal from '../models/User';
import { decode } from 'punycode';

dotenv.config();
class Auth {
  async verifyToken(req, res, next) {
    const token = req.headers['my-dialy-access-token'];
    if (!token) {
      return res.status(400).json({
        status: 400,
        error: 'Token is not provided',
      });
    }
    const decoded = await jwt.verify(token, process.env.JWT_KEY_SECRET);
    userModal.getUserByEmail(decoded.user.email).then((user) => {
      if (!user) {
        res.status(400).send({
          message: 'Invalid User',
        });
      }
      req.user = user;
      next();
    });
  }

  async generateToken(user) {
    const token = jwt.sign({user}, process.env.JWT_KEY_SECRET, { expiresIn: '7d' });
    return token;
  }
}
export default new Auth();
