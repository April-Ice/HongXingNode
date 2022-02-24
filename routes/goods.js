'use strict';

import express from 'express';
import GoodsInfo from '../controller/goodsInfo/goods'

const router = express.Router();

router.get('/productInfo', GoodsInfo.getInfo);
router.post('/productInfo', GoodsInfo.postInfo);
router.put('/productInfo', GoodsInfo.putInfo);
router.delete('/productInfo', GoodsInfo.deleteInfo);

export default router