import React from 'react';
import {motion} from "framer-motion";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./PlatformContainer.css";

function PlatformContainer(props) {
    return (
        <div className="platformContainer">
            <h1>Choose platforms</h1>
            <div className="platforms">
                <motion.img whileHover={{scale: 1.2}} src="https://img.prisguiden.no/3131/3131663/1111557.258x300!m.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://img.prisguiden.no/1761/1761744/original.316x300!m.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://www.konsolinet.fi/tuotekuvat/900x600/170px-PS3-Fat-Console-Vert.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX425_.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://pricespy-75b8.kxcdn.com/product/standard/280/673888.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://www.tradeinn.com/f/13734/137343676/nintendo-konsoll-switch.jpg"/>
                <motion.img whileHover={{scale: 1.2}} src="https://pcsupport.no/wp-content/uploads/2021/06/pcs_arbeidsstasjon_forside.png"/>
            </div>
            <motion.div  whileHover={{scale: 1.2}}><ArrowDownwardIcon id="arrowDown" /></motion.div>
        </div>
    );
}

export default PlatformContainer;