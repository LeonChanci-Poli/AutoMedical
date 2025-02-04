import { Routes, Route, BrowserRouter} from "react-router-dom";

import AppBar from "../components/AppBar/AppBar";
import Login from "../components/Login/Login";
import Registry from "../components/Registry/Registry";
import Footer from "../components/Footer/Footer";
import BoxSx from "../components/BoxSx/BoxSx";

import * as React from "react";
import Container from '@mui/material/Container';
export const AppRouter = () => {
    return (
        <BrowserRouter>
            <AppBar/>
            <Container>
            <Routes>
                <Route path="/" element={<BoxSx />} />
                <Route path="/Registry" element={<Registry />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
            </Container>
            <Footer/>
        </BrowserRouter>
    )
}
