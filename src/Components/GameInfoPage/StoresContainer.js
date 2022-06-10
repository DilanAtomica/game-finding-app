import React from 'react';
import "./StoresContainer.css";
import playstationStore from "../../Images/Stores/playstationStore.png";
import epicStore from "../../Images/Stores/epicStore.png";
import steamStore from "../../Images/Stores/steamStore.png";
import xboxStore from "../../Images/Stores/xboxStore.png";
import microsoftStore from "../../Images/Stores/miscrosoftStore.png";
import appStore from "../../Images/Stores/appStore.png";
import questionMark from "../../Images/Links/questionMark.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSteam, faPlaystation, faXbox, faAppStore, faMicrosoft, faGooglePlay} from '@fortawesome/free-brands-svg-icons'
import {faCircleQuestion, faGamepad} from "@fortawesome/free-solid-svg-icons"

function StoresContainer({gameStores, stores}) {
    return (
        <section className="storesContainer" style={{display: !gameStores && "none"}}>
            <h1>Sold by</h1>
            <ul className="stores">
                {stores?.map(store => (
                    <li className="storeBox" key={store.id}>
                        <a href={store.url}><FontAwesomeIcon id="storeIcon" size={"4x"} icon={
                                  store.store_id === 3 ? faPlaystation
                                : store.store_id === 6 ? faGamepad
                                : store.store_id === 1 ? faSteam
                                : store.store_id === 7 ? faXbox
                                : store.store_id === 2 ? faMicrosoft
                                : store.store_id === 4 ? faAppStore
                                : store.store_id === 8 ? faGooglePlay
                                : faCircleQuestion}
                        /></a>
                        {gameStores?.map(gameStore => (
                            <h2 key={gameStore.store.id}>{gameStore.id === store.id && gameStore.store?.name}</h2>
                        ))}
                    </li>
                ))}

            </ul>
        </section>
    );
}

export default StoresContainer;