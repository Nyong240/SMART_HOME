import React, { useRef } from 'react'
import {Form, Button} from 'react-bootstrap';
import axios from '../axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    
  const idRef = useRef();
  const pwRef = useRef();

  const navigate = useNavigate();

  const handleLogin = (e)=>{
    e.preventDefault();
    axios.post('/login', {id : idRef.current.value, pw : pwRef.current.value})
    .then((res)=>{
      if(res.data.result === 'success'){
        alert('로그인 성공')
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        navigate('/mypage')
      }else{
        alert('아이디 혹은 비밀번호를 확인해주세요.')
        navigate('/login')
      }
    })
  }

  const gotoSignup = ()=>{
    navigate('/signup');
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>ID</Form.Label>
        <Form.Control type="text" placeholder="Enter ID" ref={idRef}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" ref={pwRef}/>
      </Form.Group>
      
      <Button variant="primary" type="submit" onSubmit={handleLogin}>
        로그인
      </Button>
      <Button variant="primary" type="submit" onClick={gotoSignup}> 
        회원가입
      </Button>
    </Form>
  );
}

export default Login