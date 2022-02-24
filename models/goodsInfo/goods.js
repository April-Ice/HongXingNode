import mongoose from 'mongoose'

const ObjectId = mongoose.Schema.Types.ObjectId

const Schema = mongoose.Schema({
	
	title    : String,
	price    : Number,
	remark   : String,
	images   : Array,
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

const GoodsModel = mongoose.model('goods', Schema);

Schema.index({id: 1});

export default GoodsModel