
### 初始化项目
## npm install express --save
## express BLOG(项目名称)  自动生成项目
## npm install   
## npm start 启动  默认端口3000 localhost:3000

### 连接数据库mongodb
    参考(https://blog.csdn.net/weixin_41466575/article/details/105326230)
    https://blog.csdn.net/heshushun/article/details/77776706

## 下载mongodb数据库(https://www.mongodb.com/try/download/community)
## 下载compass数据库可视化 (https://www.mongodb.com/try/download/compass)


## npm install save mongoose
   新建mongodb文件夹，新建db.js文件  引入mongoose,  在app.js引入db.js

## npm i config-lite --save 
   项目文件夹/config/default.js下配置数据库地址等信息

## 安装babel才可以使用important from
   package.json中start改为node-babel ./bin/www或单独引用，见index.js
   
## 代码热更新  npm install --save-dev nodemon
   package.json中 "start": "nodemon index.js"

## npm install pm2 -g
   设置环境变量evn.PORT等，


<!-- rest -->
1、环境变量env
2、登录拦截
3、test模块
