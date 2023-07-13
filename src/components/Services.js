import React from "react";
import { BsArrowUpRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { fadeIn } from "../variants";
const services = [
    {
        name: 'UI/UX Design',
        description: 'I have been practicing UI/UX design for a couple of months now, and I am amazed by how vast this field is.What I like most is that at time It does not feel like work, It feels like a weekend break to work on a design',
        link: 'Learn More'
    },
    {
        name: 'Development',
        description: 'For over a year and a half,I have been using React and Node.js for developing and I am happy that the choice I made then sticked with me until now.React and node make a good pair for full stack developers by having the same programming language. They also a rich ecosystem,good community support,superior performance and scalability.',
        link: 'Learn More'
    },
    {
        name: 'Development',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus aut repellendus perspiciatis minus! Praesentium, ipsam enim. Natus, reprehenderit voluptatum.',
        link: 'Learn More'
    },
]
const Services = () => {
    return <section className='section' id='services'>

        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
                <motion.div
                variants={fadeIn('right',0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={ {once:false,amount:0.3}}
                className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
                    <h2 className="h2 text-accent mb-6">
                        What I do.
                    </h2>
                    <h3 className="h3 max-w-[455px] mb-16">
                        I'm a Front-End Developer at the begginning of the road.
                    </h3>
                    <button className="btn btn-sm">See my work.</button>
                </motion.div>
                <motion.div
                variants={fadeIn('left',0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={ {once:false,amount:0.3}}
                className="flex-1">
                    <div>
                        {services.map((service, index) => {
                            const {name, description, link} = service;
                            return (
                                <div className="border-b border-white/20 h-[146px] mb-[38px] flex" key={index}>
                                    <div className="max-w-[476px]">
                                        <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                                            {name}
                                        </h4>
                                        <p className="font-secondary leading-tight">{description}</p>
                                    </div>
                                    <div className="flex flex-col flex-1 items-end">
                                        <a href="/#" className="btn w-9 h-9 mb-[42px] flex justify-center items-center">
                                        <BsArrowUpRight/>
                                        </a>
                                        <a href="/#" className="text-gradient text-sm">{link}</a>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>

    </section>
};

export default Services;