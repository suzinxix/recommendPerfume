const express = require("express");
const bodyParser = require("body-parser");
const { arrayBuffer } = require("stream/consumers");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = 5500;


// ejs 엔진을 실행하기 위한 코드
app.set('views', '/Users/suzin/perfume_recomm/views');
app.set('view engine', 'ejs');

const infos = [
  {
    id: 1,
    brand: "바이레도",
    name: "블랑쉬",
    price: "240,000",
    item: ["프레쉬한", "깨끗한"],
  },
  {
    id: 2,
    brand: "바이레도",
    name: "라 튤립",
    price: "240,000",
    item: ["프레쉬한", "생화향기", "상쾌한"],
  },
  {
    id: 3,
    brand: "바이레도",
    name: "집시워터",
    price: "235,000",
    item: ["머스크", "우디"],
  },
  {
    id: 4,
    brand: "딥디크",
    name: "로시코스",
    price: "235,000",
    item: ["플로럴"],
  },
];

app.get("/", function (request, response) {
  response.sendFile("/Users/suzin/perfume_recomm/index.html");
});

app.get("/infos", (req, res) => {
  console.log("djfkd");
  const info = infos.filter(
    (k) => (k.item.find((i) => i === req.param('keyword'))
    )
  )

  res.render('about.ejs', {'data' : info}, function(err ,html){
          if (err){
              console.log(err)
          }
          res.end(html) // 응답 종료
      })
  
});

app.listen(port, () => {
  console.log("서버 실행중...");
});
