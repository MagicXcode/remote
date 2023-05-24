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
app.post('/login', (req, res) => {
  const user = req.body;
  console.log('ok');
  connection.query('SELECT * FROM user1 WHERE username = ? AND password = ?', [user.name, user.password], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: '登录失败' });
    } else {
      res.json({ message: '登录成功' });
    }
  });
  res.json({ message: '注册成功' });
});

app.get('/login', (req, res) => {
  console.log('有人访问了');
  res.json({ message: '有人访问了' })
});

// 启动服务器
app.listen(8080, () => {
  console.log('服务器已启动');
});
