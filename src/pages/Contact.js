import React from "react";
import Layout from "./../components/Layout/Layout";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 } }}>
        <Typography variant="h4">Свяжитесь с нами!</Typography>
        <p>
          Оставьте заявку как, где и когда Вам удобно. А наши агенты сделают всю работу за Вас!
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          "@media (max-width:600px)": {
            width: "300px",
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Наши контакты
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <InstagramIcon sx={{ color: "red", pt: 1 }} /> instagram.com/sunrise_warsaw
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> sunrise.properties.warsaw@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> +48795793859
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  );
};

export default Contact;