// 메인페이지

const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'react_project', 'build', 'index.html'));
})

router.post('/login', (req, res)=>{
    console.log('로그인 요청', req.body);
    res.json({result : 'success', user : {id:'asdf',pw:'1234',name:'240',email:'dlskdud@naver.com'}})
})

module.exports = router ; 