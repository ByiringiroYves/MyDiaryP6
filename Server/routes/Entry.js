/* eslint-disable no-unused-vars */
import express from 'express';
import Entry from '../controlers/Entry';
import Auth from '../middleware/AuthCheck';
import EntryMiddleWare from '../middleware/Entry';

const router = express.Router();

router.get('/api/v1/entries', Auth.verifyToken, Entry.GetEntries);
router.post('/api/v1/NewEntry', Auth.verifyToken, Entry.NewEntry);
router.delete('/api/v1/entry/:id/delete', Auth.verifyToken, EntryMiddleWare.entryExists, Entry.DeleteEntry);
router.patch('/api/v1/entry/:id/modify', Auth.verifyToken, EntryMiddleWare.entryExists, Entry.ModifyEntry);
router.get('/api/v1/entry/:id/entry', Auth.verifyToken, EntryMiddleWare.entryExists, Entry.ModifyEntry);


export default router;


