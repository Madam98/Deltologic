import express from 'express';
import { calculateVolume } from '../controllers/users';

const router = express.Router();

router.post('/', calculateVolume);

export default router;
