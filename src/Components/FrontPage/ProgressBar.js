import React from 'react';
import "./ProgressBar.css";
import { motion, useViewportScroll } from "framer-motion";
import SportsScoreIcon from '@mui/icons-material/SportsScore';


function ProgressBar(props) {

    const { scrollYProgress } = useViewportScroll()

    return (
        <div className="progressBar">
            <motion.div className="container">
                <motion.div className="item" style={{scaleY: scrollYProgress}}/>
            </motion.div>
            <SportsScoreIcon className="flag" />
        </div>
    );
}

export default ProgressBar;