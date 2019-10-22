import express from 'express';
import Entry from '../controlers/NewEntery';
// import UserMiddleWare from '../middleware/User';

const router = express.Router();

router.post('/api/v1/auth/newEntry', Entry.NewEntry);
// router.post('/api/v1/auth/signup',UserMiddleWare.userNotExists, User.signup);

export default router;