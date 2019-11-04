import express from 'express';
import User from '../controlers/User';
import UserMiddleware from '../middleware/User';

const router = express.Router();

router.post('/api/v1/auth/signup', UserMiddleware.userNotExists, User.createUser);
router.post('/api/v1/auth/signin', User.login);

export default router;
