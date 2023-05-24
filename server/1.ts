import express from 'express';
import mysql from 'mysql';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
app.use(bodyParser.json()).use(cors());

// 创建与MySQL数据库的连接
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '775028',
  database: 'web'
});

// 处理注册请求
app.post('/api/login', (req, res) => {
  const user = req.body;
  console.log('ok');
  // 将用户数据插入MySQL数据库中的相应表
  // connection.query('INSERT INTO user1 SET ?', { id: null, ...user, }, (error, results) => {
  //   if (error) {
  //     console.error(error);
  //     res.status(500).json({ message: '注册失败' });
  //   } else {
  //     res.json({ message: '注册成功' });
  //   }
  // });
  res.json({ message: '注册成功' });
});

app.get('/login', (req, res) => {
  console.log('有人访问了');
  res.json({ message: '有人访问了' })
});
app.get('/', (req, res) => {
  console.log('有人访问了');
  res.json({ message: '注册成功' })
});
// 启动服务器
app.listen(8080, () => {
  console.log('服务器已启动');
});
