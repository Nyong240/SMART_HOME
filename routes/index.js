const express = require("express");
const router = express.Router();

// 메인 페이지
router.get("/", (req, res)=>{
    console.log("main page", req.session.nickname);
    res.render('main',{nickname: req.session.nickname});
})

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
