import "../styles/Settings.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { useState } from "react";
import { Snackbar } from "@mui/material";
import axios from "axios";

const Settings = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [openSnackbarSuccess, setOpenSnackbarSuccess] = useState(false);
    const [openSnackbarError, setOpenSnackbarError] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);
    const userData = window.localStorage.getItem("userData");
    const user = JSON.parse(userData);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(oldPassword, newPassword, confirmPassword);

        if (newPassword !== confirmPassword) {
            setOpenSnackbarError(true);
            setErrorMessage(
                "The new passwords do not match, please try again."
            );
            return;
        }
        if (newPassword.length < 8) {
            setOpenSnackbarError(true);
            setErrorMessage(
                "Your password must be at least 8 characters, please try again."
            );
            return;
        }

        const headers = {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
            "Content-Type": "application/json",
        };

        axios
            .patch(
                `http://128.199.234.179:3000/${user.id}`,
                JSON.stringify({
                    old_password: oldPassword,
                    new_password: newPassword,
                    confirm_password: confirmPassword,
                }),
                { headers: headers }
            )
            .then(() => {
                setOpenSnackbarSuccess(true);
                setOldPassword("");
                setNewPassword("");
                setConfirmPassword("");
            })
            .catch(() => {
                setErrorMessage(
                    "An error occurred while updating your password, please try again later."
                );
                setOpenSnackbarError(true);
            });
    };

    return (
        <div className="Container_Setting">
            <h2>User Setting</h2>
            <form className="box" onSubmit={handleSubmit}>
                <div className="box_text">Change User Password</div>

                <Snackbar
                    open={openSnackbarSuccess}
                    autoHideDuration={6000}
                    onClose={() => {
                        setOpenSnackbarSuccess(false);
                        setErrorMessage(null);
                    }}
                    message="You have successfully reset your password."
                />
                <Snackbar
                    open={openSnackbarError}
                    autoHideDuration={6000}
                    onClose={() => {
                        setOpenSnackbarError(false);
                    }}
                    message={errorMessage}
                />

                <div className="box_center">
                    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                        <VpnKeyIcon sx={{ color: "#1C3683", mr: 1, my: 0.5 }} />
                        <TextField
                            fullWidth
                            label="Old Password"
                            variant="standard"
                            type="password"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            marginTop: "1rem",
                        }}
                    >
                        <VpnKeyIcon sx={{ color: "#1C3683", mr: 1, my: 0.5 }} />
                        <TextField
                            fullWidth
                            label="New Password"
                            variant="standard"
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "flex-end",
                            marginTop: "1rem",
                        }}
                    >
                        <VpnKeyIcon sx={{ color: "#1C3683", mr: 1, my: 0.5 }} />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            variant="standard"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </Box>
                    <div className="Submit_btn">
                        <button className="ChangePassword_Btn" type="submit">
                            Set Password
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Settings;
