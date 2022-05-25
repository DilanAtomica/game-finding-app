import React, {useEffect, useState} from 'react';
import "./FrontPage.css";
import {motion} from "framer-motion";
import axios from "axios";
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function FrontPage(props) {

    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        setToggle(true);
    }, []);

    useEffect(() => {
        const getData = async() => {
            const response = await axios.get("https://api.rawg.io/api/tags?key=0bdf9bbe0b33484f82b8ba3ae23aa065");
            console.log(response.data.results);
        }

        getData();
    }, []);

    return (
        <div className="frontPage">
            <div className="opening">
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader1">Welcome to Game Finder</h1>
                <h1 style={{transform: toggle && "translateX(0)", opacity: toggle && "1"}} id="openingHeader2">Ready to begin your Search?</h1>
                <div style={{transform: toggle && "translateY(0)", opacity: toggle && "1"}} className="startButtonContainer">
                    <motion.div whileHover={{scale: 1.2}}><Button id="startButton" size="large" variant="contained">Let's Go!</Button></motion.div>
                </div>
            </div>

            <div className="platformContainer">
                <h1>Choose platform</h1>
                <div className="platforms">
                    <motion.img whileHover={{scale: 1.2}}  src="https://img.prisguiden.no/3131/3131663/1111557.258x300!m.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://img.prisguiden.no/1761/1761744/original.316x300!m.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://www.konsolinet.fi/tuotekuvat/900x600/170px-PS3-Fat-Console-Vert.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX425_.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://pricespy-75b8.kxcdn.com/product/standard/280/673888.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://www.tradeinn.com/f/13734/137343676/nintendo-konsoll-switch.jpg"/>
                    <motion.img whileHover={{scale: 1.2}} src="https://pcsupport.no/wp-content/uploads/2021/06/pcs_arbeidsstasjon_forside.png"/>
                </div>
                <motion.div  whileHover={{scale: 1.2}}><Button style={{backgroundColor: "black"}} variant="contained"><ArrowDownwardIcon style={{fontSize: "60px"}} /></Button></motion.div>
            </div>

            <div className="genreContainer">
                <h1>Choose genre</h1>
                <div className="genres">
                    <div className="genresBox">
                        <Button style={{backgroundColor: "#0C7C59"}} variant="contained">Any</Button>
                        <Button style={{backgroundColor: "#06D6A0"}} variant="contained">Action</Button>
                        <Button style={{backgroundColor: "#1B9AAA"}} variant="contained">Adventure</Button>
                        <Button style={{backgroundColor: "#EF476F"}} variant="contained">RPG</Button>
                        <Button style={{backgroundColor: "#FFC43D"}} variant="contained">Strategy</Button>
                    </div>

                    <div className="genresBox">
                        <Button style={{backgroundColor: "#F39237"}} variant="contained">Shooter</Button>
                        <Button style={{backgroundColor: "#BF1363"}} variant="contained">Casual</Button>
                        <Button style={{backgroundColor: "#0E79B2"}} variant="contained">Simulation</Button>
                        <Button style={{backgroundColor: "#191923"}} variant="contained">Puzzle</Button>
                        <Button style={{backgroundColor: "#6A0F49"}} variant="contained">Arcade</Button>
                    </div>

                    <div className="genresBox">
                        <Button style={{backgroundColor: "#5DD9C1"}} variant="contained">Platformer</Button>
                        <Button style={{backgroundColor: "#ACFCD9"}} variant="contained">Racing</Button>
                        <Button style={{backgroundColor: "#B084CC"}} variant="contained">Massive Multiplayer</Button>
                        <Button style={{backgroundColor: "#665687"}} variant="contained">Sports</Button>
                        <Button style={{backgroundColor: "#190933"}} variant="contained">Fighting</Button>
                    </div>

                    <div className="genresBox">
                        <Button style={{backgroundColor: "#003844"}} variant="contained">Family</Button>
                        <Button style={{backgroundColor: "#006C67"}} variant="contained">Board Games</Button>
                        <Button style={{backgroundColor: "#F194B4"}} variant="contained">Educational</Button>
                        <Button style={{backgroundColor: "#FFB100"}} variant="contained">Card</Button>
                        <Button style={{backgroundColor: "#A31621"}} variant="contained">Indie</Button>
                    </div>
                </div>
                <motion.div id="genresButtonNext"  whileHover={{scale: 1.2}}><Button style={{backgroundColor: "black"}} variant="contained"><ArrowDownwardIcon style={{fontSize: "60px"}} /></Button></motion.div>
            </div>

            <div className="playerAmountContainer">
                <h1>Choose playstyle</h1>
                <div className="amountOptions">
                    <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#EB6424"}} variant="contained">Single Player</Button></motion.div>
                    <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#0A1045"}} variant="contained">Multiplayer</Button></motion.div>
                    <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#00C2D1"}} variant="contained">Co-op</Button></motion.div>
                    <motion.div whileHover={{scale: 1.2}}><Button style={{backgroundColor: "#F9C22E"}} variant="contained">Any</Button></motion.div>
                </div>
                <motion.div  whileHover={{scale: 1.2}}><Button style={{backgroundColor: "black"}} variant="contained"><ArrowDownwardIcon style={{fontSize: "60px"}} /></Button></motion.div>
            </div>
        </div>
    );
}

export default FrontPage;