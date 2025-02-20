import express from "express";
import { getAllContacts,getContact ,createContact, deleteContact, updateContact, deleteAllContacts} from "../controllers/controllers.js"; 

const router=express.Router()

router.get('/', getAllContacts);
router.get('/:id', getContact);
router.post('/', createContact);
router.put('/:id', updateContact);
router.post('/:id', deleteContact);
router.post('/',deleteAllContacts);

export default router;
