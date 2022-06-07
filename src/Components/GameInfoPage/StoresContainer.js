import React from 'react';
import "./StoresContainer.css";
import playstationStore from "../../Images/Stores/playstationStore.png";
import epicStore from "../../Images/Stores/epicStore.png";
import steamStore from "../../Images/Stores/steamStore.png";
import xboxStore from "../../Images/Stores/xboxStore.png";
import microsoftStore from "../../Images/Stores/miscrosoftStore.png";
import appStore from "../../Images/Stores/appStore.png";
import questionMark from "../../Images/Links/questionMark.png";

function StoresContainer({gameStores, stores}) {
    return (
        <div className="storesContainer" style={{display: !gameStores && "none"}}>
            <h2>Sold by</h2>
            <div className="stores">
                {stores?.map(store => (
                    <div className="storeBox" key={store.id}>
                        <a href={store.url}><img src={
                                  store.store_id === 3 ? playstationStore
                                : store.store_id === 11 ? epicStore
                                : store.store_id === 1 ? steamStore
                                : store.store_id === 7 ? xboxStore
                                : store.store_id === 2 ? microsoftStore
                                : store.store_id === 4 ? appStore
                                : questionMark}
                        /></a>
                        {gameStores?.stores?.map(gameStore => (
                            <h3 key={gameStore.store.id}>{gameStore.id === store.id && gameStore.store?.name}</h3>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
}

export default StoresContainer;