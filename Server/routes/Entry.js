/* eslint-disable no-unused-vars */
import express from 'express';
import Entry from '../controlers/Entry';
import Auth from '../middleware/AuthCheck';
import EntryMiddleWare from '../middleware/Entry';

const router = express.Router();

router.get('/api/v1/entries', Auth.verifyToken, Entry.GetEntries);
router.post('/api/v1/entries', Auth.verifyToken, Entry.NewEntry);
router.delete('/api/v1/entry/:id', Auth.verifyToken, EntryMiddleWare.entryExists, Entry.DeleteEntry);
router.patch('/api/v1/entry/:id', Auth.verifyToken, Entry.Modify);
router.get('/api/v1/entry/:id', Auth.verifyToken, EntryMiddleWare.entryExists, Entry.GetEntry);


export default router;


