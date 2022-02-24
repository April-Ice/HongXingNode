'use strict';

import BaseComponent from '../../prototype/baseComponent'
import ActivityModel from '../../models/list/activity'

class Category extends BaseComponent{
	constructor(){
		super()
	}

	//获取活动列表
	async getActivity(req, res, next){
		console.log('-------getActivity-------')
		try{
			const activities = await ActivityModel.find({}, '-_id');
			res.send(activities)
		}catch(err){
			console.log('获取活动数据失败');
			res.send({
				status: 0,
				type: 'ERROR_DATA',
				message: '获取活动数据失败'
			})
		}
	}

	async addCategory(req, res, next){
		console.log('-------addCategory-------')
		console.log('req',req.body.name)
		try{
			let newItem = {
				name:req.name
			}
			if(req.body.name){
				// await ActivityModel.create(newItem)
				const model = await ActivityModel.create(req.body);
				res.send(model);
			}else{
				console.log('name为空')
			}
		}catch(err){
			console.log('增加category数量失败');
		}
	}
	
}

export default new Category()