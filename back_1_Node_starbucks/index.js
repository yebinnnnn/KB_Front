//모듈을 사용하고 만드는것에 집중하기
const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

//요청 json 형태로 받아서 사용하려면 이거 꼭 써야함.;;;
app.use(express.json());

//get 요청이 되었을때 할 일을 적어주는 공간
//슬래시 안에 루트URL, req res 로 콜백함수 실행
app.get('/', (req, res) => {
  res.send('WELCOME');
});
//app.post()

//꼭 응답할때 JSON 형태로 반환하도록
app.get('/product', (req, res) => {
  //   res.send('아메리카노, 아이스 아메리카노'); JSON 문자열 형태로도 응답가능
  const products = [
    {
      prodNo: 'C0001',
      prodName: '아메리카노',
      prodPrice: 1500,
    },
    { prodNo: 'C0002', prodName: '아이스 아메리카노', prodPrice: 1500 },
    { prodNo: 'C0003', prodName: '카페 라떼', prodPrice: 1500 },
    {
      prodNo: 'C0004',
      prodName: '아이스라테',
      prodPrice: 2000,
    },
    {
      prodNo: 'C0005',
      prodName: '콜드브루몰트',
      prodPrice: 2500,
    },
    {
      prodNo: 'C0006',
      prodName: '카페브레베',
      prodPrice: 3500,
    },
    {
      prodNo: 'C0007',
      prodName: '바닐라라떼',
      prodPrice: 3500,
    },
  ];
  //json 문자 형태로 응답됨. (원래 이걸 백엔드가 보내주는디)
  res.json(products);
});

//가변경로를 표시할땐 콜론을 쓰면 되고, req.params 를 통해 찾아가면 된다.
app.get('/product/:prodNo', (req, res) => {
  //   res.send(`${req.params.prodNo} 상품의 상세 내용입니다.`);
  let product;
  const { prodNo } = req.params;

  if (req.params.prodNo == 'C0001') {
    product = {
      prodNo: 'C0001',
      prodName: '나이트로 바닐라 크림 라떼',
      prodPrice: 1500,
    };
  } else if (req.params.prodNo == 'C0002') {
    product = {
      prodNo: 'C0002',
      prodName: '리저브 카페 라떼',
      prodPrice: 1500,
    };
  } else if (req.params.prodNo == 'C0003') {
    product = { prodNo: 'C0003', prodName: '핫 아메리카노', prodPrice: 1500 };
  } else if (req.params.prodNo == 'C0004') {
    product = { prodNo: 'C0004', prodName: '핫 카페라테', prodPrice: 1500 };
  } else {
    product = {
      prodNo: '그 외의 상품',
      prodName: '그 외의 상품',
      prodPrice: 0,
    };
  }
  res.json(product);
});

//회원관련 백 코드
let customers = [{ id: 'id00', password: 'pass00' }]; //고객저장소
function findById(id) {
  //배열 요소 찾아내는 함수
  return customers.find((element) => element.id === id);
}
//http://localhost:3000/login
//post 함수 쓰기
app.post('/login', (req, res) => {
  // if (!req.body.id || req.body.id == 'admin') {
  console.log(req.body.id, req.body.pwd);
  const c = findById(req.body.id);
  if (!req.body.id || !c || c.pwd !== req.body.pwd) {
    //Id 가 없거나 일치하지 않거나 등...
    res.status(400);
    res.send('로그인 실패');
  } else {
    res.status(200);
    res.send('로그인 성공');
  }
});

app.post('/signup', (req, res) => {
  const { id, pwd, name } = req.body;
  console.log(req.body.id, req.body.password);

  const exUser = customers.find((u) => u.id === id);
  if (exUser) {
    return res.status(400).send('아이디가 존재합니다');
  }

  customers.push({ id, pwd, name });

  res.status(201).send('회원가입 성공');
});

//사용자 연결 감시
app.listen(port, () => {
  console.log('3000번 포트에서 backend server 실행중...');
});
