'use strict';

import express from 'express';
import todoInfo from '../controller/todoListInfo/todoList'

const router = express.Router();

router.get('/getList', todoInfo.getInfo);
router.post('/addList', todoInfo.postInfo);
router.put('/editList', todoInfo.putInfo);
router.delete('/deleteList', todoInfo.deleteInfo);

export default router