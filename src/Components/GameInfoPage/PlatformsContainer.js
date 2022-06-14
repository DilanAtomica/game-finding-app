import React from 'react';
import "./PlatformsContainer.css";
import ps5 from "../../Images/Platforms/ps5.png";
import ps4 from "../../Images/Platforms/ps4.png";
import ps3 from "../../Images/Platforms/ps3.png";
import xboxSeries from "../../Images/Platforms/xboxSeries.png";
import xbox1 from "../../Images/Platforms/xbox1.png";
import xbox360 from "../../Images/Platforms/xbox360.png";
import xbox from "../../Images/Platforms/xbox.png";
import nintendoSwitch from "../../Images/Platforms/nintendoSwitch.png";
import pc from "../../Images/Platforms/pc.png";
import android from "../../Images/Platforms/android.png";
import ios from "../../Images/Platforms/ios.png";
import linux from "../../Images/Platforms/linux.png";
import macOS from "../../Images/Platforms/macOS.png";
import nintendoDS from "../../Images/Platforms/nintendoDS.png";
import nintendo64 from "../../Images/Platforms/nintendo64.png";
import wii from "../../Images/Platforms/wii.png";
import psVita from "../../Images/Platforms/psVita.png";
import ps2 from "../../Images/Platforms/ps2.png";
import psp from "../../Images/Platforms/psp.png";
import ps1 from "../../Images/Platforms/ps1.png";
import blueQuestionMark from "../../Images/Links/blueQuestionMark.png";


function PlatformsContainer({platforms}) {
    return (
        <section className="platformsContainer" style={{display: platforms?.length <= 0 && "none"}}>
            <h1>Platform availability</h1>
            <ul className="platformsAvailableContainer">
                {platforms?.map(platform => (
                    <li key={platform.platform.id} className="platformsAvailableBox">
                        <img alt={platform.platform.name} src={
                            platform.platform.id === 187 ? ps5 : platform.platform.id === 18 ? ps4 : platform.platform.id === 16 ? ps3
                                : platform.platform.id === 186 ? xboxSeries : platform.platform.id === 1 ? xbox1 : platform.platform.id === 14 ? xbox360 : platform.platform.id === 7 ? nintendoSwitch
                                : platform.platform.id === 4 ? pc : platform.platform.id === 21 ? android : platform.platform.id === 3 ? ios : platform.platform.id === 6 ? linux
                                : platform.platform.id === 5 ? macOS : platform.platform.id === 9 ? nintendoDS : platform.platform.id === 83 ? nintendo64
                                : platform.platform.id === 11 ? wii : platform.platform.id === 19 ? psVita : platform.platform.id === 15 ? ps2 : platform.platform.id === 17 ? psp
                                : platform.platform.id === 27 ? ps1  : platform.platform.id === 80 ? xbox : blueQuestionMark
                        } />
                        <h2>{platform.platform.name}</h2>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default PlatformsContainer;