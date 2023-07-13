import React from "react";
import Image from '../assets/avatar.png';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Banner = () => {

    const btnanimate = () => {
        let btn = document.getElementById("btn");
        btn.onmousemove = function (e) {
            let rect = e.target.getBoundingClientRect();

            let x = e.clientX - rect.left;
            btn.style.setProperty("--x", x + "px");
        }
    };

    return (
        <section className="min-h-[85hv] lg:min-h-[78vh] flex items-center" id='home'>
            <div className="container mx-auto">
                <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
                    <div className="flex-1 text-center font-secondary lg:text-left">
                        <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-[65px] font-bold leading-[0.8] lg:text-[70px]">ALEX <span>FARCAS</span>
                        </motion.h1>
                        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
                            <span className="mr-4 text-white">I am a</span>
                            <TypeAnimation sequence={[
                                'Developer',
                                2000,
                                'Designer',
                                2000,
                                'Student',
                                2000,
                            ]}
                                speed={50}
                                className='text-accent'
                                wrapper="span"
                                repeat={Infinity}
                            />
                        </motion.div>
                        <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="mb-8 max-w-lg mx-auto lg:mx-0">
                            Enthusiastic Computer Science and
                            Mathematics student from Babes-Bolyai
                            University. I am able to work well both in a
                            team environment as well as using my own
                            initiative. Eager to learn new technologies
                            and develop new skills, I am always trying to
                            push myself to be better
                        </motion.p>
                        <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0">
                            <button onMouseOver={btnanimate} id='btn' className="btn btn-lg">Contact Me</button>
                            <a href="/#" className="text-gradient btn-link">My Portofolio</a>
                        </motion.div>
                        <motion.div variants={fadeIn('up', 0.7)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0">
                            <a href="https://www.instagram.com">
                                <FaInstagram />
                            </a>
                            <a href="https://www.instagram.com">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/alex-farcas-860648214/">
                                <FaLinkedin />
                            </a>
                        </motion.div>
                    </div>
                    <motion.div
                    variants={fadeIn('left', 0.5)}
                     initial="hidden"
                      whileInView={'show'}
                       viewport={{ once: false, amount: 0.7 }}
                    className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-lighten ">
                        <img src={Image} alt='' className="h-[20em] w-[20em]" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
};

export default Banner;