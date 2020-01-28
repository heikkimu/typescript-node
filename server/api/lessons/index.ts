import express from "express";
import { create } from "./create";
import { patch } from "./patch";
import { deleteLessonApi } from "./delete";
import { detail } from "./detail";


const router = express.Router()

router.post('/', create);
router.get('/:id', detail);
router.patch('/:id', patch);
router.delete('/:id', deleteLessonApi);
export default router;