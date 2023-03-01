import React from "react";
import Image from '../assets/avatar.png';
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
import { TypeAnimation } from "react-type-animation";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import './button-animation'

const Banner = () => {
    return (
        <section className="section" id='home'>
            <div className="container mx-auto">
                <div>
                    <div>
                        <h1>ALEX <span>FARCAS</span>
                        </h1>
                        <div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
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
                        </div>
                        <p>
                            Enthusiastic Computer Science and
                            Mathematics student from Babes-Bolyai
                            University. I am able to work well both in a
                            team environment as well as using my own
                            initiative. Eager to learn new technologies
                            and develop new skills, I am always trying to
                            push myself to be better
                        </p>
                            <div>
                                <button className="btn btn-lg">Contact Me</button>
                                <a href="/#" className="text-gradient btn-link">My Portofolio</a>
                            </div>
                    </div>
                </div>
                <div>
                    <img src={Image} alt='' className="h-[25em] w-[25em]" />
                </div>
            </div>
        </section>
    )
};

export default Banner;