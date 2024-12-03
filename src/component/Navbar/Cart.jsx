import { Badge, Menu, MenuItem } from '@mui/material';
import { IoMdCart } from "react-icons/io";
import { IoHomeSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from 'react';
import { MdNotificationsNone } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { LuDownload } from "react-icons/lu";



const Cart = () => {
    const [anchorEl, setanchorEl] = useState(null)
    const [open, setopen] = useState(false)

    const handleClose = () => {
        setanchorEl(null)
        setopen(false)
    }

    const handleClick = (e) => {
        setanchorEl(e.currentTarget)
        setopen(true)
    }

    return (
        <div className='flex items-center gap-10'>
            <Badge badgeContent={5} color="primary" overlap="rectangular">
                <IoMdCart size={26} />
            </Badge>
            <div className='flex items-center gap-2'>
                <IoHomeSharp size={25} />
                <button className='hidden lg:block'>Become a Seller</button>
            </div>
            <div>
                <BsThreeDotsVertical
                    onClick={handleClick}
                />
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem
                        onClick={handleClose}
                        className='gap-2'
                    >
                        <MdNotificationsNone />
                        <button>Notification Preferences</button>
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        className='gap-2'
                    >
                        <RiCustomerService2Line />
                        <button>24x7 Customer Care Support</button>
                    </MenuItem>
                    <MenuItem
                        onClick={handleClose}
                        className='gap-2'
                    >
                        <LuDownload />
                        <button>Download App</button>
                    </MenuItem>
                </Menu>
            </div>

        </div>
    );
};

export default Cart;
