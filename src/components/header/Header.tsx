import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import { API } from "../../lib/Api";

import "./Header.css"

const Header = () => {
    const search = () => {
        return console.log("deu certo")
    }

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const genreList = API.getGenreList()

    return (
        <nav id="navbar">
            <h2>
                <BrowserRouter>
                    <a href='/'><VideoCameraBackOutlinedIcon sx={{ color: "#f7d354" }} /><b>Top Movies</b></a>
                </BrowserRouter>
            </h2>
            <Button
                variant="contained"
                color="warning"
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ marginRight: "-1200px" }}
            >
                Category
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                sx={{ color: "#f7d354" }}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                {genreList.map((genre) => (
                    <MenuItem key={genre.id} onClick={handleClose}>
                        <a href={`/movie/${genre.id}`} style={{ color: "black" }}>
                            {genre.name}
                        </a>
                    </MenuItem>
                ))}
            </Menu>
            <form onSubmit={search}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', color: 'white', marginTop: "-20px" }}>
                    <MovieFilterOutlinedIcon sx={{ color: '#f7d354', mr: 1, my: 0.5 }} />
                    <TextField onChange={() => ""} id="input-with-sx" label="Busque um filme" label-color="white" variant="standard" color='warning' />
                </Box>
                <Button type='submit' variant="contained" startIcon={<SearchOutlinedIcon />}>
                </Button>
            </form>
        </nav>
    );
};
export default Header;