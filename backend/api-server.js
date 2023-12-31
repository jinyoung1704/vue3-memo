// node expressnpm install express
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require("body-parser"); //req.body를 사용하기 위해 

const memos = [];
const newPost = [];


app.use(bodyParser.json());

// 첫번째로 화면에 들어오면 hello world 값을 보낸다
//memo
app.get('/api/memos', (req, res) => {
  res.send(memos)
})

app.post("/api/memos",(req,res)=>{
  memos.push(req.body.content);
  res.send(memos)
})

app.put("/api/memos/:idx",(req,res)=>{
  //console.log(req.body);
  //console.log(req.params.idx);
  memos[req.params.idx] = req.body.content;
  res.send(memos)
})

//Memo
app.get('/api/addPost', (req, res) => {
  res.send(newPost)
})

app.post("/api/addPost",(req,res)=>{
  //console.log('======post========');
  //console.log('req.body',req.body.newPost);
  newPost.push(req.body.newPost);

  res.send(newPost)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//axios 설치 : htpp 통신을 할 수 있는 모듈