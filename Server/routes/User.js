import express from 'express';
import User from '../controlers/User';
import UserMiddleware from '../middleware/User';
import usermid from '../middleware/users'

const router = express.Router();

router.post('/api/v2/auth/signup', UserMiddleware.userNotExists,usermid.Signupvalid,  User.createUser);
router.post('/api/v2/auth/signin', UserMiddleware.userExists, usermid.Signinvalid, User.login);

export default router;
