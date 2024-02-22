import React, { useEffect, useRef, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from '../axios'

const SignUp = () => {

  const idRef = useRef()
  const pwRef = useRef()
  const pw2Ref = useRef()
  const nameRef = useRef()

  const [userData, setUserData] = useState({});
  const [text, setText] = useState('');


  const checkId = ()=>{
    axios.post('/user/checkId', {id : idRef.current.value})
    .then((res)=>{
      if(res.data.result === 'dup'){
        setText('※ 사용 불가능한 아이디입니다. 다른 아이디를 입력해주세요.')
      }else{
        setText('※ 사용 가능한 아이디입니다.')
      }
    })
  }
 

  const handleJoin = (e)=>{

    e.preventDefault();
    console.log(idRef.current.value, pwRef.current.value);

    setUserData({
      id : idRef.current.value,
      pw : pwRef.current.value,
      name : nameRef.current.value
    })
  }


 useEffect(()=>{
  if(userData.id !== undefined){
    if(pwRef.current.value === pw2Ref.current.value){
      axios.post('/user/join', {userData:userData})
      .then((res)=>{
        console.log('요청 성공!', res.data);
  
        if(res.data.msg === 'success'){
          window.alert('환영합니다!')
          window.location.href = '/main';
        }else{
          window.alert('다시 한 번 확인해주세요')
          window.location.href('/join')
        }
      })
    }
  }
 },[userData]);

  return (
    <div>
      <h1>회원가입</h1>
      <hr/>
      <Form onSubmit={handleJoin}>

        <Form.Group className="mb-3" controlId="formBasicId">
          <Form.Label>ID</Form.Label>
          <Form.Control
            type="text" placeholder="Enter ID" ref={idRef}/>
        </Form.Group>

        <div className='d-grid gap mb-3'>
          <Button variant='light' onClick={checkId}>중복체크</Button>
          {/* 아이디 중복여부에 따라 다른 내용 출력 */}
          <span>{text}</span>
        </div>
        
        <Form.Group className="mb-3" controlId="formBasicPassWord1">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
          type="password" placeholder="Enter Password" ref={pwRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassWord2">
          <Form.Label>비밀번호 확인</Form.Label>
          <Form.Control
          type="password" placeholder="Confirm Password" ref={pw2Ref}/>
        </Form.Group>

        {/* 비밀번호1, 비밀번호2가 일치하지 않을 때 내용 출력 */}
        <span>※ 비밀번호가 일치하지 않습니다.</span>

        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>name</Form.Label>
          <Form.Control
          type="text" placeholder="Enter Name" ref={nameRef}/>
        </Form.Group>
        

        <div className='d-grid gap mb-3'>
          <Button variant='info' type='submit'>회원가입</Button>
        </div>

      </Form>
    </div>
  )
}

export default SignUp