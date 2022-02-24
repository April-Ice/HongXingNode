'use strict';

import goods from './goods'
import todoList from './todoList'

export default app => {
	app.use('/goods', goods);
	app.use('/todoList', todoList);
}