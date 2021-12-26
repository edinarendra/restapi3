import express from "express";
import { getNotifs, getNotifId, saveNotif, updateNotif, deleteNotif } from "../controllers/NotificationController.js";

const router = express.Router();

//get
router.get('/', getNotifs);
//get data by id
router.get('/:id', getNotifId);
//create
router.post('/', saveNotif);
//update
router.patch('/:id', updateNotif);
//delete
router.delete('/:id', deleteNotif);

export default router;