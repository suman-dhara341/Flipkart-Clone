import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Search from './Search';
import Profile from './Profile';
import Cart from './Cart';
import { CiUser } from "react-icons/ci";
import { BsBox } from "react-icons/bs";
import { MdOutlineCircle } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";

const drawerWidth = 240;

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div className='bg-[#0B69D1] text-white h-14 flex items-center justify-between px-3'>
                <CiUser size={24} />
                <p>Flipkart Customer</p>
                <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logo_lite-cbb357.png" alt="icon" className='h-6' />
            </div>
            <Divider />
            <List sx={{ margin: 0 }}>
                <ListItem>
                    <div className='flex items-center gap-2'>
                        <MdOutlineCircle />
                        <button className='text-sm text-slate-700'>SuperCoin Zone</button>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='flex items-center gap-2'>
                        <MdOutlineCircle />
                        <button className='text-sm text-slate-700'>Flipkart plus Zone</button>
                    </div>
                </ListItem>
                <Divider />
                <ListItem>
                    <div className='flex items-center justify-center gap-2'>
                        <BsBox />
                        <button className='text-sm text-slate-700'>All Categories</button>
                    </div>
                </ListItem>
                <ListItem>
                    <div className='flex items-center justify-center gap-2'>
                        <CiCircleMore />
                        <button className='text-sm text-slate-700'>More on Flipkart</button>
                    </div>
                </ListItem>
                <Divider />
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', height:40 }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ background: 'white', color: 'black' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className='flex items-center justify-between gap-4 w-full'>
                        <div className='hidden md:block'>
                            <img src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_plus-055f80.svg" alt="icon" className='h-8' />
                        </div>
                            <Search />
                            <Profile />
                            <Cart />
                    </div>
                </Toolbar>
            </AppBar>
            <nav className='text-black'>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
                <Typography>
                </Typography>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
   
    window: PropTypes.func,
};

export default DrawerAppBar;
