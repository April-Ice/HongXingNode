'use strict';

import mongoose from 'mongoose'
import activityData from '../../controller/InitData/activity'

const Schema = mongoose.Schema;

const activitySchema = new Schema({
	name: String,
})

activitySchema.index({index: 1});

const Activity = mongoose.model('Activity', activitySchema);

// Activity.findOne((err, data) => {
// 	if (!data) {
// 		activityData.forEach(item => {
// 			Activity.create(item);
// 		})
// 	}
// })

export default Activity