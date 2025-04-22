import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const app = express(); // 가게 오픈
const port = 3000;
const host = process.env.DB_HOST;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMAS,
});

db.connect((err) => {
  console.log("db 연결 성공");
  if (err) console.log(err); //if가 truthy이면 뒤에 실행
});

app.use(express.json()); //반드시 app=express() 생성 후 선언

app.listen(port, host, () => {
  //문 열어두고 손님 기다림
  console.log(`${host} 도메인의 port ${port} 번 서버 생성 후 대기중`);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/info", (req, res) => {
  res.setHeader("status", 200);
  res.setHeader("type", "json");
  res.json({ name: "홍길동", age: 20 });
});

app.get("/param/:id", (req, res) => {
  const id = req.params.id;
  res.send(`parameter ${id} 에 대한 요청 처리중`);
  //   console.log(req.params.id);
  //   res.send("파라미터 요청 처리중");
});

app.get("/query", (req, res) => {
  console.log(req.query);
  //   const id = req.query.id;      이렇게하면 번거롭고
  //   const name = req.query.name;  코드가 길어짐
  //   const age = req.query.age;    =>구조분해 할당 필요
  //   const email = req.query.email;
  const { id, name, age, email } = req.query; //구조분해할당
  res.send(`${id}, ${name}, ${age}, ${email} 에 대한 요청 처리중`);
});

app.get("/nations", (req, res) => {
  const sql = "select * from nations_table";
  db.query(sql, (err, results, fields) => {
    if (err) console.log(err);
    res.setHeader("type", "json"); //res랑 req확실히 구분
    res.send(results); //.setHeader & .send 확실히 파악
    console.log(results);
  });
});

app.get("/nations/:id", (req, res) => {
  console.log(req.params.id);
  const id = req.params.id;
  const sql = "select * from nations_table where id=?";
  db.query(sql, [id], (err, results) => {
    if (err) res.setHeader("status", 404);
    if (results.length > 0) {
      // 빈 배열도 truthy임.
      console.log(results[0]);
      res.setHeader("type", "json"); //res랑 req확실히 구분
      res.send(results[0]); //.setHeader & .send 확실히 파악
    } else {
      res.setHeader("type", "html");
      res.send("<p>요청한 자료를 찾을 수 없습니다.</p>");
    }
  });
});

app.post("/hello", (req, res) => {
  console.log(req.body);
  const { name, age, email } = req.body;
  console.log("post 요청 처리중입니다.");
  res.send(`${name},${age},${email} 에 대한 post 요청 처리 완료`);
}); // '' path로 ()=>{}요청이 들어오면 아래 코드로 응답해줘

app.post("/nations", (req, res) => {
  console.log(req.body);
  const { name, capital, population } = req.body;
  //sql-insert
  const sql =
    "insert into nations_table (name,capital,population) values (?,?,?)";
  db.query(sql, [name, capital, population], (err, results) => {
    if (err) {
      console.log(err);
      res.send("등록요청 처리중 오류 발생");
    } else {
      console.log(results);
      res.redirect(302, `https://${host}:${port}/nations`);
      // res.send(
      //   `${results.insertId},${name},${capital},${population} 에 대한 post 요청 처리 완료`
      // );
    }
  });
}); // '' path로 ()=>{}요청이 들어오면 아래 코드로 응답해줘

app.put("/nations/:id", (req, res) => {
  const { id, name, capital, population } = req.body;
  console.log(req.body);
  console.log(req.params.id);
  const sql = "update nations_table set population =? where id=?";
  db.query(sql, [population, id], (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
  res.send("처리중");
});

app.delete("/nations/:id", (req, res) => {
  const id = req.params.id;
  const sql = "delete from nations_table where id=?";
  db.query(sql, [id], (err, results) => {
    if (err) console.log(err);
    console.log(results);
  });
  res.send("삭제 처리중");
});
