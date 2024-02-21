// mysql 모듈 설치
// npm install mysql2

// mysql 모듈 가져오기
const mysql = require('mysql2');

// DB 정보 기재

const conn = mysql.createConnection({
    host:'project-db-campus.smhrd.com',
    user : 'campus_23IS_IoT2_P2_3',
    password : 'smhrd3',
    port : 3307,
    database : 'campus_23IS_IoT2_P2_3'
});

conn.connect();

module.exports = conn;