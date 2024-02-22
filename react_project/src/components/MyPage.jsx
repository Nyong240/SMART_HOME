import React from 'react'
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const MyPage = () => {

    const user = JSON.parse(sessionStorage.getItem('user'))

  return (
    <div>
        <span>{user.name}님</span>
        <Link to="/doorlock">
          <Button variant="light">DoorLock</Button>
        </Link>
        <Link to="/window">
          <Button variant="light">Window</Button>
        </Link>
        <Link to="/memberlist">
          <Button variant="light">회원검색</Button>
        </Link>
        <Link to="/delete">
          <Button variant="light">회원탈퇴</Button>
        </Link>
    </div>
  )
}

export default MyPage