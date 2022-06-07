import React from 'react';
import "./LinksContainer.css";
import redditLogo from "../../Images/Links/reddit.png";
import metaCriticLogo from "../../Images/Links/metacritic.png";
import questionMark from "../../Images/Links/questionMark.png";

function LinksContainer({redditLink, metaCriticLink, websiteLink, subRedditIcon}) {
    return (
        <div className="linksContainer">
            <h2 className="linksTitle">Various Links</h2>
            <div className="links" style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}}>
                {redditLink &&
                    <div className="linksBox">
                        <a href={redditLink}><img src={redditLogo} /></a>
                        <h3 className="linksBoxTitle">Games Subreddit</h3>
                    </div>
                }
                {metaCriticLink &&
                    <div className="linksBox">
                        <a href={metaCriticLink}><img src={metaCriticLogo} /></a>
                        <h3 className="linksBoxTitle">MetaCritic</h3>
                    </div>
                }
                {websiteLink &&
                    <div className="linksBox">
                        <a href={websiteLink}><img src={subRedditIcon ? subRedditIcon : questionMark} /></a>
                        <h3 className="linksBoxTitle">Games Website</h3>
                    </div>
                }
            </div>
        </div>
    );
}

export default LinksContainer;