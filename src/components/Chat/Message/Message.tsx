import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
interface IMessage {
  message: string;
  timestamp: any;
  user: string;
  userImage: string;
}
function Message({ message, timestamp, user, userImage }: IMessage) {
  return (
    <MessageContainer>
      <img src={userImage} alt="Logo" />
      <MessageInfo>
        <h4>
          {user}
          <span>
            {moment(new Date(timestamp?.toDate()).toUTCString()).fromNow()}
          </span>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </MessageContainer>
  );
}

export default Message;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;

  > img {
    height: 50px;
    border-radius: 8px;
  }
`;

const MessageInfo = styled.div`
  padding-left: 10px;
  > h4 {
    color: gray;
    font-weight: 300;
    margin-left: 4px;
    font-size: 10px;
  }
`;
