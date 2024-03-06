import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import React, { useRef } from "react";
import WeatherAppImage from "../../../public/weather-app.png"
import BloodChain from "../../../public/bloodchain.png"
import Cineflix from "../../../public/cineflix.png"
import Nyancat from "../../../public/nyancat.png"

const items = [
    {
        id:1,
        title: "ClimaCast",
        img: WeatherAppImage,
        desc: "Responsive weather app developed by using an openWeather API. It shows current weather, weather history, weather forecast and weather alerts also.",
    },
    {
        id:2,
        title: "BloodChain",
        img: BloodChain,
        desc: "Presently engaging with this Software Development Group Project at IIT. BloodChain is a decentralized aplication (Web3) to establish direct communication between donors and recipients during the process of requesting and donating blood.",
    },
    {
        id:3,
        title: "Cineflix",
        img: Cineflix,
        desc: "Front end of a responsive website to review and sell movies online.",
    },
    {
        id:4,
        title: "Nyan Cat",
        img: Nyancat,
        desc: "A mini game to click on a moving cat until it’s nine lives coming to an end.",
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        // offset:["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div >
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {

    const ref= useRef()

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item=>(
                
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
}

export default Portfolio