import React from 'react';
import { Dialog as MuiDialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const LogoutDialog = ({ open, onClose }) => {
    return (
        <MuiDialog open={open} onClose={onClose}>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogContent>
                Are you sure you want to log out?
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={() => {
                        onClose();
                        console.log('Logged out!'); // Add logout logic here
                    }}
                    color="primary"
                    variant="contained"
                >
                    Logout
                </Button>
            </DialogActions>
        </MuiDialog>
    );
};

export default LogoutDialog;
