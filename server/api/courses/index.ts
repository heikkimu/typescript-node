import { all } from "./all";
import express from "express";
import { detail } from "./detail";

const router = express.Router()

router.get('/', all);
router.get('/:id', detail);

export default router;