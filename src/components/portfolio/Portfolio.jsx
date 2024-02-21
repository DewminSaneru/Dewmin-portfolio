import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import React, { useRef } from "react";

const items = [
    {
        id:1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/919734/pexels-photo-919734.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro quisquam veritatis ratione iusto sit esse, laborum doloremque in odit error illo, ut nobis optio suscipit aperiam perferendis officiis ullam.",
    },
    {
        id:2,
        title: "Next js Commerce",
        img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro quisquam veritatis ratione iusto sit esse, laborum doloremque in odit error illo, ut nobis optio suscipit aperiam perferendis officiis ullam.",
    },
    {
        id:3,
        title: "Vanilla Commerce",
        img: "https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro quisquam veritatis ratione iusto sit esse, laborum doloremque in odit error illo, ut nobis optio suscipit aperiam perferendis officiis ullam.",
    },
    {
        id:4,
        title: "Music App",
        img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus porro quisquam veritatis ratione iusto sit esse, laborum doloremque in odit error illo, ut nobis optio suscipit aperiam perferendis officiis ullam.",
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