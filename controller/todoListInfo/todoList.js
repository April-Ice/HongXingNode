'use strict';

import BaseComponent from '../../prototype/baseComponent'
import TodoModel from '../../models/todoListModal/todoList'

class todoInfo extends BaseComponent {
    constructor() {
        super()
    }

    //获取
    async getInfo(req, res, next) {
        try {
            const todoList = await TodoModel.find({ isActive: 1, checked: false });
            const doneList = await TodoModel.find({ isActive: 1, checked: true });
            let param = {
                todoList:todoList,
                doneList:doneList,
            }
            res.send(param)
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
        console.log('-------新增-------')
        console.log('req--title', req.body.title)
        try {
            if (req.body.title) {
                const newData = {
                    title: req.body.title,
                    checked: false,
                    create_at: Date.now(),
                    update_at: Date.now(),
                }
                const model = await TodoModel.create(newData);
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
        console.log('-------req-------', req)
        console.log('-------res-------', res)
        try {
            const id = req.body.id
            if (id) {
                console.log('修改id', id)
                const newData = {
                    checked: req.body.checked,
                    update_at: Date.now(),
                }
                await TodoModel.findOneAndUpdate({ _id: id }, { $set: newData });
                res.send({
                    status: 1,
                    success: '修改信息成功',
                })
            } else {
                res.send({
                    status: 0,
                    success: 'id错误，请联系管理员',
                })
            }
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

            // 假删除
            await TodoModel.findOneAndUpdate({ _id: id }, { $set: { isActive: 0 } });
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

export default new todoInfo()