import express from 'express';
import User from '../controlers/User';
import UserMiddleware from '../middleware/User';

const router = express.Router();

router.post('/api/v2/auth/signup', UserMiddleware.userNotExists, User.createUser);
router.post('/api/v2/auth/signin', User.login);

export default router;
