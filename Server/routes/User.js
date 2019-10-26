import express from 'express';
import User from '../controlers/User';
// import UserMiddleWare from '../middleware/User';

const router = express.Router();

// router.post('/api/v1/auth/singnup', User.signup);
router.post('/api/v1/auth/signup', User.createUser);
router.post('/api/v1/auth/login', User.login);

export default router;
