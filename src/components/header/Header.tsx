import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Box, Button, Menu, MenuItem } from '@mui/material';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import VideoCameraBackOutlinedIcon from '@mui/icons-material/VideoCameraBackOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { API } from "../../lib/Api";

import "./Header.css"

const Header = () => {
    const [busca, setBusca] = useState("")
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleKeyPress = (e) => {
        e.preventDefault()
        if (!busca) return
        navigate(`/search?q=${busca}`)
        setBusca("")
    };

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
                <Link to='/'><VideoCameraBackOutlinedIcon sx={{ color: "#f7d354" }} /><b>TOP MOVIES</b></Link>
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
                    <Button key={genre.id} color='warning'>
                        <MenuItem onClick={handleClose}>
                            <Link to={`/order/${genre.id}`} style={{ color: "black" }}>
                                {genre.name}
                            </Link>
                        </MenuItem>
                    </Button>
                ))}
            </Menu>
            <form onSubmit={handleKeyPress}>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', color: 'white', marginTop: "-20px", marginRight: "20px"}}>
                    <MovieFilterOutlinedIcon sx={{ color: '#f7d354', mr: 2, my: 0.5 }} />
                    <TextField value={busca} onChange={(e) => setBusca(e.target.value)} id="input-with-sx" label="Search" variant="standard" color='warning' />
                </Box>
            </form>
        </nav>
    );
};
export default Header;
