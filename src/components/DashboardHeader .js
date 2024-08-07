import React from 'react';
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const SearchBar = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  margin-right: 20px;
  width: 300px;

  @media (max-width: 768px) {
    margin: 0 0 10px 0;
    width: 100%;
  }
`;

const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  color: white;

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const DashboardHeader = () => {
  return (
    <HeaderContainer>
      <SearchBar placeholder="Search..." />
      <HeaderInfo>
        <IconWrapper>
          <MailIcon style={{ color: 'gray' }} />
          <NotificationsIcon style={{ color: 'gray' }} />
          <SettingsIcon style={{ color: 'gray' }} />
          <AccountCircleIcon style={{ color: 'gray' }} />
        </IconWrapper>
      </HeaderInfo>
    </HeaderContainer>
  );
};

export default DashboardHeader;
