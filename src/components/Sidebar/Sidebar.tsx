import React from 'react';
import styled from 'styled-components';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './SidebarOption/SidebarOption';
import {
  BookmarkBorder,
  ExpandLess,
  PeopleAlt,
  InsertComment,
  FileCopy,
  Inbox,
  Apps,
  ExpandMore,
  Add,
} from '@material-ui/icons';
import { useCollection } from 'react-firebase-hooks/firestore';
import db, { auth } from '../../firebase/config';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const [channels, loading, error] = useCollection(db.collection('rooms'));
  const [user] = useAuthState(auth);
  return (
    <SidebarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Slack 2.0</h2>
          <h3>
            <FiberManualRecordIcon />
            {user?.displayName}
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People and user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="file browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption={true} title="Add channels" />
      {channels?.docs.map((doc: any) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
  }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  border-bottom: 10px;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
  > .MuiSvgIcon-root:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-weight: 400;
    font-size: 13px;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
