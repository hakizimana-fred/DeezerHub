import { Router } from 'express';
import { deezerCtrl } from '../controllers/deezer.controller';

const router = Router();

router.get('/search', deezerCtrl.search);
router.get('/search/:artistId', deezerCtrl.searchById);

export default router;
