import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = mongoose.Schema({
	title    : String,
	checked  : {
		type   : Boolean,
		default: false,
	},
	create_at: {
		type   : Date,
		default: Date.now(),
	},
	update_at: Date,
	isActive : {
		type   : Number,
		default: 1,
	},
})

const TodoModel = mongoose.model('todoList', Schema);

Schema.index({id: 1});

export default TodoModel