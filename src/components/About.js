import React from "react";
import CountUp from "react-countup";
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const About = () => {
    const [ref, inView] = useInView({
        threshold: 0.5,
    });
    return (
        <section className='section' id='about' ref={ref}>
            <div className="container mx-auto">

                <div className="flex-1 bg-about bg-contain bg-no-repeat h-[650px] mix-lend-lighten bg-top"></div>

                <div>
                    <h2>About me.</h2>
                    <h3>
                        I'm a Front-End Developer on the begginning of the road.
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aperiam explicabo aliquid vero earum cumque nam ex, alias hic suscipit quisquam? 
                    </p>
                    <div>
                        <div>
                            <CountUp start={0} end={13} duration={3}/>
                        </div>
                        <div className="font-primary text-sm tracking-[2px]">
                            Years of <br/>
                            Experience
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
};

export default About;