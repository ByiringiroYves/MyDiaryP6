/* eslint-disable no-unused-vars */
import express from 'express';
import Entry from '../controlers/Entry';
import Auth from '../middleware/AuthCheck';
import EntryMiddleWare from '../middleware/entries';
import EntryMiddle from '../middleware/Entry';

const router = express.Router();

router.post('/api/v2/entries', Auth.verifyToken, EntryMiddleWare.EntryValid, Entry.NewEntry);
router.get('/api/v2/entry/:id', Auth.verifyToken, EntryMiddle.entryExists, Entry.GetEntry);
router.get('/api/v2/entries', Auth.verifyToken, Entry.GetEntries);
router.patch('/api/v2/entry/:id', Auth.verifyToken, EntryMiddle.entryExists, Entry.Modify);
router.delete('/api/v2/entry/:id', Auth.verifyToken, EntryMiddle.entryExists, Entry.DeleteEntry);


export default router;


