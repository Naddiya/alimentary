import React from "react";
import { Box } from '@mui/material';

import '../../styles/home.scss';

function Home() {

    return (
        <Box className="home">
            <h2 className="home-title">Welcome to Alimentary.</h2>
            <h3 className="home-subtitle">Reasoned weight loss monitoring tool</h3>
        </Box>
    );
}

export default Home;