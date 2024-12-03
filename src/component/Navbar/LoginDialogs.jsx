import { IconButton, Dialog, DialogContent, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const LoginDialogs = ({ open, onClose }) => {
    return (
        <Dialog
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    width: "600px", 
                    height: "400px",
                },
            }}
        >
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent sx={{ display: 'flex', height: '100%', p: 0 }}>
                <div className="flex flex-col justify-center items-center bg-[#2874F0] text-white p-6 w-1/2 h-full">
                    <h1 className="text-xl font-bold">Login</h1>
                    <p className="text-sm mt-2">
                        Get access to your Orders, Wishlist, and Recommendations
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center w-1/2 p-6">
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Enter Your Mobile Number"
                            className="w-full border p-2 rounded outline-none"
                        />
                        <p className="text-sm text-gray-600">
                            By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.
                        </p>
                        <Button
                            variant="contained"
                            sx={{ width: "100%", backgroundColor: "#FF6161" }}
                        >
                            Request OTP
                        </Button>
                    </form>
                    <p className="text-center text-sm text-blue-500 mt-4 cursor-pointer">
                        New to Flipkart? Create an account
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialogs;
