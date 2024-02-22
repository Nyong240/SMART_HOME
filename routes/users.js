const express = require("express");
const router = express.Router();
const conn = require('../config/database');

// 회원가입 기능
router.post('/handleSignUp',(req,res)=>{
    console.log('signup data',req.body);
    const {userId,userPw,userNick} = req.body

    const sql2 = 'select user_id from users where user_id = ?'
    conn.query(sql2,[userId],(err,rows)=>{
        if(rows.length > 0){
            res.send(`<script>
            alert('이미 사용중인 아이디 입니다.')
            location.href = '/signup'
            </script>`);
        }
        else{
            const sql = `insert into users values (?,?,?)`
            conn.query(sql,[userId,userPw,userNick],(err, rows)=>{
            console.log('rows',rows);
            console.log('err',err);
        if (rows){
            // res.send(`<script>alert('회원가입 성공');</script>`)
            res.redirect('/');
            
            
        }
            
        else{
            res.send(`<script>alert('회원가입 실패');location.href= '/signup';</script>`)
        }
    })    
        }
    })
    // const sql = `insert into member values ("z","x,","d")`
   
})
router.post('/handleSignIn',(req,res)=>{
    console.log('ss',req.body);
    const {userId,userPw} = req.body;
    const sql = `select user_id,user_nick from member where user_id = ? and user_pw = ?;`
    conn.query(sql, [userId,userPw],(err, rows)=>{
        console.log('err',err);
        console.log('rows', rows);
        if(rows.length > 0){
            console.log('로그인 성공');
            req.session.nickname = rows[0].nick;
            // res.redirect('/');
            res.send(`<script>location.href='/'</script>`)
        }
        else{
            console.log('로그인 실패');
            res.send(`<script>alert('로그인 실패!');
            location.href = '/signin';</script>`)
        }
    })
})
router.get('/showList',(req,res)=>{
    console.log(req.query);
    if(req.query.userId){
        const sql = 'select user_id,user_nick from users where user_id=? '
        conn.query(sql,[req.query.userId], (err,rows)=>{
        console.log('rows',rows);
        res.render('list',{rows : rows});
    })
    }else{
        const sql = 'select id,nick from member'
        conn.query(sql,[req.query.userId], (err,rows)=>{
            console.log('rows',rows);
            res.render('list',{rows : rows});
        })}
})

router.post('/handleDelete',(req,res)=>{
    console.log(req.body);
    const {userId,userPw} = req.body;
    const sql = 'delete from users where user_id=? and user_pw=?'
    conn.query(sql,[userId,userPw],(err,rows)=>{
        if(rows.affectedRows > 0){
            res.redirect('/')
        }
        else{
            res.send(`<script>
                alert('존재하지 않는 회원 정보입니다.')
                location.href='/delete';
            </script>`)
        }
    })
})

router.get('/signout',(req,res)=>{
    req.session.destroy();
    res.send(`<script>location.href='/'</script>`)
})
module.exports = router;