import express from 'express';
import User from '../controlers/User';

const router = express.Router();

router.post('/api/v1/auth/signup', User.createUser);
router.post('/api/v1/auth/signin', User.login);

export default router;
