import React, {useState} from 'react';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./PlatformContainer.css";
import PlatformButton from "./PlatformButton";
import {Link} from "react-scroll";

function PlatformContainer({handlePlatforms}) {

    return (
        <div className="platformContainer" id="phaseOne">
            <h1>Choose platforms</h1>
            <div className="platforms">
                <PlatformButton handlePlatforms={handlePlatforms} idName="187" platformName="Playstation 5" srcName="https://img.prisguiden.no/3131/3131663/1111557.258x300!m.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="18" platformName="Playstation 4" srcName="https://img.prisguiden.no/1761/1761744/original.316x300!m.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="16" platformName="Playstation 3" srcName="https://www.konsolinet.fi/tuotekuvat/900x600/170px-PS3-Fat-Console-Vert.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="1" platformName="Xbox One" srcName="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX425_.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="14" platformName="Xbox 360" srcName="https://pricespy-75b8.kxcdn.com/product/standard/280/673888.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="7" platformName="Nintendo Switch" srcName="https://www.tradeinn.com/f/13734/137343676/nintendo-konsoll-switch.jpg" />
                <PlatformButton handlePlatforms={handlePlatforms} idName="4" platformName="PC" srcName="https://pcsupport.no/wp-content/uploads/2021/06/pcs_arbeidsstasjon_forside.png" />
            </div>
            <Link to="phaseTwo" spy={true} smooth={true} offset={50} duration={1000}><ArrowDownwardIcon id="arrowDown" /></Link>
        </div>
    );
}

export default PlatformContainer;