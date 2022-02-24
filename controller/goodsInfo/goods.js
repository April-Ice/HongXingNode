'use strict';

import BaseComponent from '../../prototype/baseComponent'
import GoodsModel from '../../models/goodsInfo/goods'

class GoodsInfo extends BaseComponent {
    constructor() {
        super()
    }

    //获取
    async getInfo(req, res, next) {
        try {
            const info = await GoodsModel.find({ isActive: 1 });
            res.send(info)
        } catch (err) {
            res.send({
                status: 0,
                type: 'ERROR_DATA',
                message: '获取数据失败'
            })
        }
    } 

    // 新增
    async postInfo(req, res, next) {
        console.log('-------postInfo-------')
        console.log('req', req.body.title)
        try {
            if (req.body.title) {
                const newData = {
                    title: req.body.title,
                    price: req.body.price,
                    remark: req.body.remark,
                    // images: req.body.images,
                    create_at: Date.now(),
                    update_at: Date.now(),
                }
                const model = await GoodsModel.create(newData);
                res.send(model);
            } else {
                console.log('title为空')
            }
        } catch (err) {
            console.log('新增失败');
        }
    }

    // 修改
    async putInfo(req, res, next) {
        console.log('-------修改-------')
        try {
            const id = req.body._id
            console.log(id, id)
            const newData = {
                title: req.body.title,
                price: req.body.price,
                remark: req.body.remark,
                images: req.body.images,
                update_at: Date.now(),
            }
            await GoodsModel.findOneAndUpdate({  _id: id }, { $set: newData });
            res.send({
                status: 1,
                success: '修改信息成功',
            })
        } catch (err) {
            res.send({
                status: 0,
                success: '修改信息失败',
            })
        }
    }

    // 删除
    async deleteInfo(req, res, next) {
        try {
            const id = req.body.id
            console.log('req', req.body)
            console.log('id', id)
            // const product = await GoodsModel.findOneAndDelete({ _id: ObjectId(id) });
            // await GoodsModel.findOneAndDelete({ _id: id });
            // 假删除
            await GoodsModel.findOneAndUpdate({ _id: id }, { $set: { isActive: 0 } });
            res.send({
                status: 1,
                success: '删除成功',
            })
        } catch (err) {
            res.send({
                status: 0,
                success: '删除失败',
            })
        }
    }
}

export default new GoodsInfo()