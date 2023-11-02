// import React from "react";
// const ChatsPage = (props) => {
//     return <h1> ChatsPage ...</h1>
// } 

import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
    <PrettyChatWindow
      projectId="5a38f8de-fc23-4c1d-8d7d-d2e0d52cdadd"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: "100%" }}
    />
  );
}

export default ChatsPage;
