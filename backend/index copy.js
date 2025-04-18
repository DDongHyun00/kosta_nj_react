import express from "express";

const app = express();        // 가게 오픈
const port = 8000;

app.listen(port, "localhost", () => {          //문 열어두고 손님 기다림
  console.log(`localhost 도메인의 port ${port} 번 서버 생성 후 대기중`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  res.setHeader('status',200);
  res.setHeader('type','json');
  res.json({"name": "홍길동", "age":20})
});

app.get("/param/:id", (req,res) => {
    const id = req.params.id;
    res.send(`parameter ${id} 에 대한 요청 처리중`)
//   console.log(req.params.id);
//   res.send("파라미터 요청 처리중");
});

app.get("/query", (req,res) => {
  console.log(req.query);
//   const id = req.query.id;      이렇게하면 번거롭고 
//   const name = req.query.name;  코드가 길어짐  
//   const age = req.query.age;    =>구조분해 할당 필요
//   const email = req.query.email;      
  const {id,name,age,email} = req.query; //구조분해할당
  res.send(`${id}, ${name}, ${age}, ${email} 에 대한 요청 처리중`);
});

