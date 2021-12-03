간단한 설명<br>
app.js --> 메인함수<br>
modules/db.js --> db연동 스크립트<br>
modules/jwt.js --> jwt토큰을 이용한 로그인 스크립트<br>
routes/user.js --> 로그인, 회원가입 스크립트(JWT토큰 이용, HTTP Only Cookie에 저장, bcrypt로 암호화사용)<br>
routes/chatlist.js --> 채팅목록 스크립트<br><br>

주의사항<br>
큰 틀은 조교 예제 코드를 참조했음<br>
app.js에서 urlencoded를 사용해서 urlencoded로 보내야함<br>
bcrypt로 암호화를 진행해서 bcrypt 패키지 설치 필요<br>
jwt token을 위해 npm install --save jsonwebtoken 필요<br>
chatlist 조회를 위해 db schema에 fk로 receiver와 user.id 추가<br>
암호화된 비밀번호를 저장하기 위해 db schema에 user.PW 자료형을 CHAR(60)으로 수정<br>
