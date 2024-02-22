import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Card } from "react-bootstrap";

import Logo from './Logo'
import Login from './Login'
import MyPage from './MyPage';

const Left = () => {
  return (
    <div>
        <Card>
            <Logo/>
            <Login/>

            <Card.Body>
                <Routes>
                    <Route path="/logo" element={<Logo/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                </Routes>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Left