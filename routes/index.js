const express = require("express");
const router = express.Router();

// 메인 페이지
router.get("/", (req, res)=>{
    console.log("main page", req.session.nickname);
    res.render('main',{nickname: req.session.nickname});
})

<<<<<<< HEAD
router.post('/login', (req, res)=>{
    console.log('로그인 요청', req.body);
    res.json({result : 'success', user : {id:'asdf',pw:'1234',name:'240',email:'dlskdud@naver.com'}})
})

module.exports = router ; 
=======
router.get("/signup", (req, res)=>{
    res.render('signup');
})

router.get("/signin", (req, res)=>{
    res.render('signin');
})

router.get('/search' ,(req,res)=>{
    res.render('search');
})
router.get('/delete',(req,res)=>{
    res.render('delete')
})
router.get('/mini',(req,res)=>{
    res.render('mini')
})
module.exports = router;
>>>>>>> 2a84d1068552e7a400d85243ea70a6f8d5bba99e
