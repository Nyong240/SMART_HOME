import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Card } from "react-bootstrap";

import SignUp from './SignUp'
import DoorLock from './DoorLock'
import Window from './Window'

const Right = () => {
  return (
    <div>
        <Card>
            <SignUp/>
            <DoorLock/>
            <Window/>

            <Card.Body>
                <Routes>
                    <Route path="/signup" element={<SignUp/>}/>
                    <Route path="/doorlock" element={<DoorLock/>}/>
                    <Route path="/window" element={<Window/>}/>
                </Routes>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Right