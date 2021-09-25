/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { useRhinoState } from 'react-rhino';

import { FiMoreVertical } from 'react-icons/fi';
import { MenuItem, Menu as MaterialMenu, withStyles } from '@material-ui/core';

import { logout } from '../../../Services/user';
import useApiError from '../../../hooks/useApiError';

const StyledMenu = withStyles({
  paper: {
    borderRadius: '.75rem',
    margin: '.25rem -4rem 0 0',
    padding: '.5rem',
    boxShadow: '0px 0px 7px 0px rgba(223,237,227,1)',
  },
})((props) => (
  <MaterialMenu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    minHeight: '2.25rem',
    minWidth: '5rem',
    lineHeight: 0,
  },
}))(MenuItem);

const Menu = ({ darkMode, toggleDarkMode }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [user, setUser] = useRhinoState('user');

  const { handleApiError } = useApiError();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    try {
      await logout(user.user_type);

      setUser({
        is_user_logged_in: false,
      });
    } catch (error) {
      handleApiError(error);
    }
    setAnchorEl(null);
  };

  const handleThemeChange = () => {
    toggleDarkMode();
    setAnchorEl(null);
  };

  return (
    <div className="header-menu">
      <button
        type="button"
        className="header-menu-button"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <FiMoreVertical />
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleThemeChange}>
          {darkMode ? 'Light Mode' : 'Dark mode'}
        </StyledMenuItem>
        <StyledMenuItem onClick={handleLogout}>Logout</StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default Menu;
