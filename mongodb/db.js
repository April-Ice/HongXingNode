'use strict';

import mongoose from 'mongoose';
import config from 'config-lite';
import chalk from 'chalk';
// mongoose.connect(config.url, {useMongoClient:true});
mongoose.connect('mongodb://localhost:27017/HongXing',{ useNewUrlParser: true,useUnifiedTopology: true });
mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.once('open' ,() => {
	console.log(
    chalk.green('连接数据库成功')
  );
  console.log(
    chalk.green('view：http://localhost:3000/',)
  );
  console.log(
    chalk.green('Server is running at ：http://localhost:8083/',)
  );
})

db.on('error', function(error) {
    console.error(
      chalk.red('Error in MongoDb connection: ' + error)
    );
    mongoose.disconnect();
});

db.on('close', function() {
    console.log(
      chalk.red('数据库断开，重新连接数据库')
    );
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});

export default db;
