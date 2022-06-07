import React from 'react';
import "./PlatformsContainer.css";
import ps5 from "../../Images/Platforms/ps5.png";
import ps4 from "../../Images/Platforms/ps4.png";
import ps3 from "../../Images/Platforms/ps3.png";
import xboxSeries from "../../Images/Platforms/xboxSeries.png";
import xbox1 from "../../Images/Platforms/xbox1.png";
import xbox360 from "../../Images/Platforms/xbox360.png";
import nintendoSwitch from "../../Images/Platforms/nintendoSwitch.png";
import pc from "../../Images/Platforms/pc.png";
import questionMark from "../../Images/Links/questionMark.png";

function PlatformsContainer({platforms}) {
    return (
        <div className="platformsContainer" style={{display: platforms?.length <= 0 && "none"}}>
            <h2>Platform availability</h2>
            <div className="platformsAvailableContainer">
                {platforms?.map(platform => (
                    <div key={platform.platform.id} className="platformsAvailableBox">
                        <img src={
                            platform.platform.id === 187 ? ps5 : platform.platform.id === 18 ? ps4 : platform.platform.id === 16 ? ps3
                                : platform.platform.id === 186 ? xboxSeries : platform.platform.id === 1 ? xbox1 : platform.platform.id === 14 ? xbox360 : platform.platform.id === 7 ? nintendoSwitch
                                    : platform.platform.id === 4 ? pc : questionMark
                        } />
                        <h3>{platform.platform.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PlatformsContainer;