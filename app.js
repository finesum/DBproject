const express = require('express');
const app = express();

// friends 테이블 처리
var router_friends = require('./router/router_friends');
app.use('/api/friends/',router_friends);

app.get('/api/', (req,res) => {
    res.send("Hello world!");
});

// 서버 실행 : 포트넘버 6257은 언제나 바뀐다...
app.listen(6257, () => {
    console.log('Server is listening...');
});