import React from "react";
import { motion } from 'framer-motion'
import { fadeIn } from "../variants";
import website3 from "../assets/website3.png"
import website1 from '../assets/website1.png'
import website2 from '../assets/website2.png'
const Work = () => {
    return (

        <div className='section' id='work'>
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-x-10 ">
                    <motion.div
                        variants={fadeIn('right',0.3)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={ {once:false,amount:0.3}}
                    className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                        <div>
                            <h2 className="h2 leading-tight text-accent">
                                My Latest<br />
                                Work.
                            </h2>
                            <p className="max-w-sm mb-16">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae maxime, voluptas aperiam omnis id soluta iure quos. Quis, recusandae deserunt.</p>
                            <button className="btn btn-sm">View all projects</button>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">

                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                        <a href="http://Darkhider23.github.io/login-form-galssmorphism">
                        <img
                                className="group-hover:scale-125 transition-all duration-500 mix-blend-lighten"
                                src={website1}
                                alt="" />
                        </a>

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                                <span className="text-gradient">React/JavaScript</span>

                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white">Parallax Login Form</span>
                            </div>
                        </div>

                    </motion.div>
                    <motion.div
                        variants={fadeIn('left',0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={ {once:false,amount:0.3}}
                    className="flex-1 flex flex-col  gap-y-10">
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">

                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <a href="http://Darkhider23.github.io/wave-effect-css">
                            <img
                                className="group-hover:scale-125 transition-all duration-500 mix-blend-lighten"
                                src={website2}
                                alt="" />
                            </a>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                                <span className="text-gradient">HTML/CSS</span>

                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white">Wave Effect Island</span>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-x1">

                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <a href="http://Darkhider23.github.io/React-Weather-App">
                            <img
                                className="group-hover:scale-125 transition-all duration-500 mix-blend-lighten"
                                src={website3}
                                alt="" />
                            </a>

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">

                                <span className="text-gradient">React/JavaScript</span>

                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white">Weather App</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
};

export default Work;