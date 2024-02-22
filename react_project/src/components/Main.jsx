import React from 'react'
import { Card } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Login from './Login'
import SignUp from './SignUp'
import Left from './Left';
import Right from './Right';
import Logo from './Logo';
import DoorLock from './DoorLock';
import Window from './Window';
import MyPage from './MyPage';


const Main = () => {
  return (
    <div>
        <Card>
            <Left/>
            <Right/>

            {/* <Card.Body>
                <Routes>
                    <Route path="/logo" element={<Logo/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/mypage" element={<MyPage/>}/>
                    <Route path="/doorlock" element={<DoorLock/>}/>
                    <Route path="/window" element={<Window/>}/>
                </Routes>
            </Card.Body> */}
        </Card>
    </div>
  )
}

export default Main