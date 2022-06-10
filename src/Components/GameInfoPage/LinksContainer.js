import React from 'react';
import "./LinksContainer.css";
import metaCriticLogo from "../../Images/Links/metacritic.png";
import questionMark from "../../Images/Links/questionMark.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReddit} from '@fortawesome/free-brands-svg-icons'

function LinksContainer({redditLink, metaCriticLink, websiteLink, subRedditIcon}) {
    return (
        <section className="linksContainer">
            <h1 className="linksTitle">Various Links</h1>
            <ul className="links" style={{borderTopRightRadius: "0", borderTopLeftRadius: "0"}}>
                {redditLink &&
                    <li className="linksBox">
                        <a href={redditLink}><FontAwesomeIcon id="redditIcon" size={"4x"} icon={faReddit} /></a>
                        <h2>Games Subreddit</h2>
                    </li>
                }
                {metaCriticLink &&
                    <li className="linksBox">
                        <a href={metaCriticLink}><img src={metaCriticLogo} alt="Meta critic logo" /></a>
                        <h2 className="linksBoxTitle">MetaCritic</h2>
                    </li>
                }
                {websiteLink &&
                    <li className="linksBox">
                        <a href={websiteLink}><img src={subRedditIcon ? subRedditIcon : questionMark} alt="Games website logo" /></a>
                        <h2 className="linksBoxTitle">Games Website</h2>
                    </li>
                }
            </ul>
        </section>
    );
}

export default LinksContainer;