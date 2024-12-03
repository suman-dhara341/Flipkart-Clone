import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { CgProfile } from 'react-icons/cg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { BsBoxSeamFill } from 'react-icons/bs';
import { AiFillHeart } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import Dialog from './LoginDialogs';
import LogoutDialog from './LogoutDialog';

const Profile = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [loginDialog, setLoginDialog] = useState(false);
    const [logoutDialog, setLogoutDialog] = useState(false);

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpen(true);
    };

    const handleLogoutClick = () => {
        setLogoutDialog(true);
        setOpen(false);
    };
    const handleLoginClick = () => {
        setLoginDialog(true);
        setOpen(false);
    };

    const handleDialogClose = () => {
        setLoginDialog(false);
    };

    const handleLogoutDialogClose = () => {
        setLogoutDialog(false); // Closing the logout dialog
    };

    return (
        <div>
            <div className='flex items-center' onClick={handleClick}>
                <CgProfile className='cursor-pointer mr-2' size={22} />
                <button>Flipkart</button>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon className='cursor-pointer' />}
            </div>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: 160,
                        marginTop: 6,
                    },
                }}
            >
                <MenuItem onClick={handleLoginClick}>
                    <div className='flex items-center gap-2'>
                        <CgProfile />
                        <button>My profile</button>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className='flex items-center gap-2'>
                        <BsBoxSeamFill />
                        <button>My Order</button>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className='flex items-center gap-2'>
                        <AiFillHeart size={21} />
                        <button>Wishlist</button>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>
                    <div className='flex items-center gap-2'>
                        <FiLogOut />
                        <button>Logout</button>
                    </div>
                </MenuItem>
            </Menu>

            <Dialog open={loginDialog} onClose={handleDialogClose} />

            <LogoutDialog open={logoutDialog} onClose={handleLogoutDialogClose} />
        </div>
    );
};

export default Profile;
