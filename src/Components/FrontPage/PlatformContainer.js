import React, {useState} from 'react';
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./PlatformContainer.css";
import PlatformButton from "./PlatformButton";
import {Link} from "react-scroll";
import ps5 from "../../Images/Platforms/ps5.png";
import ps4 from "../../Images/Platforms/ps4.png";
import ps3 from "../../Images/Platforms/ps3.png";
import xbox1 from "../../Images/Platforms/xbox1.png";
import xbox360 from "../../Images/Platforms/xbox360.png";
import xboxSeries from "../../Images/Platforms/xboxSeries.png";
import nintendoSwitch from "../../Images/Platforms/nintendoSwitch.png";
import pc from "../../Images/Platforms/pc.png";

function PlatformContainer({handlePlatforms}) {

    return (
        <div className="platformContainer" id="phaseOne">
            <h1>Choose platforms</h1>
            <div className="platforms">
                <PlatformButton handlePlatforms={handlePlatforms} idName="187" platformName="Playstation 5" srcName={ps5} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="18" platformName="Playstation 4" srcName={ps4} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="16" platformName="Playstation 3" srcName={ps3} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="1" platformName="Xbox One" srcName={xbox1} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="14" platformName="Xbox 360" srcName={xbox360} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="186" platformName="Xbox Series S/X" srcName={xboxSeries} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="7" platformName="Nintendo Switch" srcName={nintendoSwitch} />
                <PlatformButton handlePlatforms={handlePlatforms} idName="4" platformName="PC" srcName={pc}/>

            </div>
            <Link to="phaseTwo" spy={true} smooth={true} offset={50} duration={1000}><ArrowDownwardIcon id="arrowDown" /></Link>
        </div>
    );
}

export default PlatformContainer;