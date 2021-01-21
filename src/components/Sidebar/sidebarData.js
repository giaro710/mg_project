import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import MailIcon from '@material-ui/icons/Mail';
import DasboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import PermMediaIcon from '@material-ui/icons/PermMedia';

export const sidebarData = [
  {
    title: 'Home',
    icon: (
      <HomeIcon
        style={{
          fill: '#f67d20',
          fontSize: '28px',
          paddingLeft: '4px',
        }}
      />
    ),
    link: '/',
  },
  {
    title: 'Mailbox',
    icon: (
      <MailIcon
        style={{
          fill: '#f67d20',
          fontSize: '28px',
          paddingLeft: '4px',
        }}
      />
    ),
    link: '/mailbox',
  },
  {
    title: 'Dashboard',
    icon: (
      <DasboardIcon
        style={{
          fill: '#f67d20',
          fontSize: '28px',
          paddingLeft: '4px',
        }}
      />
    ),
    link: '/',
  },
  {
    title: 'Friends',
    icon: (
      <GroupIcon
        style={{
          fill: '#f67d20',
          fontSize: '28px',
          paddingLeft: '4px',
        }}
      />
    ),
    link: '/',
  },
  {
    title: 'Images',
    icon: (
      <PermMediaIcon
        style={{
          fill: '#f67d20',
          fontSize: '28px',
          paddingLeft: '4px',
        }}
      />
    ),
    link: '/',
  },
];
