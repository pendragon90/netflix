import Image from 'next/image';
import React from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from 'next/link';

function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="flex items-center">
      <button
        className="flex items-center"
        onClick={handleClick}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <Image
          alt="profile icon"
          src="/images/icon-profile.jpg"
          width={40}
          height={40}
          className="h-8 w-8"
        />
        <ArrowDropDownIcon className="text-white" />
      </button>
      <Menu
        disableScrollLock
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          sx: {
            backgroundColor: '#000', // Ganti latar belakang menu list jadi hitam
          },
        }}
      >
        <MenuItem
          className="text-sm flex gap-2"
          sx={{ color: '#fff' }}
          variant="body2"
        >
          <Image
            alt="profile icon"
            src="/images/icon-profile.jpg"
            width={40}
            height={40}
            className="h-8 w-8"
          />
          <span>John Smith</span>
          <EditIcon />
        </MenuItem>

        <MenuItem
          className="text-sm flex gap-2"
          sx={{ color: '#fff' }}
          variant="body2"
        >
          <BookmarksIcon />
          <span>Watchlist</span>
        </MenuItem>

        <MenuItem
          className="text-sm flex gap-2"
          sx={{ color: '#fff' }}
          variant="body2"
        >
          <HistoryIcon />
          <span>History</span>
        </MenuItem>

        <MenuItem
          className="text-sm flex gap-2"
          sx={{ color: '#fff' }}
          variant="body2"
        >
          <SettingsIcon />
          <span>Settings</span>
        </MenuItem>

        <MenuItem
          className="text-sm flex gap-2"
          sx={{ color: '#fff' }}
          variant="body2"
        >
          <LogoutIcon />
          <span>Logout</span>
        </MenuItem>
      </Menu>
    </section>
  );
}

export default Profile;
