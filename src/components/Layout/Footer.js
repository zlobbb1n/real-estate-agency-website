import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, IconButton, Typography } from "@mui/material";
const Footer = () => {
    return (
        <>
            <Box
                sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
            >
                <Box
                    sx={{
                        my: 3,
                        "& svg": {
                            fontSize: "60px",
                            cursor: "pointer",
                            mr: 2,
                            color: "white"
                        },
                        "& svg:hover": {
                            color: "#0aa5a7",
                            transform: "translateX(10px)",
                            transition: "all 400ms",
                        },

                    }}
                >
                    {/* icons */}
                    <IconButton href="https://www.instagram.com/sunrise_warsaw/" target='_blank'>
                        <InstagramIcon />
                    </IconButton>
                    <IconButton href="https://t.me/sunrise_warsaw" target='_blank'>
                        <TelegramIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/sunrise_warsaw/" target='_blank'>
                        <GitHubIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com/sunrise_warsaw/" target='_blank'>
                        <YouTubeIcon />
                    </IconButton>
                </Box>
                <Typography
                    variant="h5"
                    sx={{
                        "@media (max-width:600px)": {
                            fontSize: "1rem",
                        },
                    }}
                >
                    Все права защищены &copy; Sunrise
                </Typography>
            </Box>
        </>
    );
};

export default Footer;