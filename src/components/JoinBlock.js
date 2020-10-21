import React from 'react';
import socket from '../socket'


function JoinBlock() {

  return (
      <div className="join-block">
        <input type = "text" placeholder="Room ID"></input>
        <input type = "text" placeholder="Your Name"></input>
        <button className="btn btn-success">Enter</button>
      </div>
  );
}

export default JoinBlock;