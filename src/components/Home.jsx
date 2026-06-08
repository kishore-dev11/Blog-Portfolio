import React from 'react'
import Navbar from './common/Navbar'
import BlogProfileImage from "../assets/Blog Website Design.jpg"
import CSS from "../assets/css-3.png"
import HTML from "../assets/html.png"
import DB from "../assets/data-server.png"
import JS from "../assets/js.png"
import REACTICON from "../assets/physics.png"
import NODE from "../assets/node-js.png"
import P1 from "../assets/p1.jpg"
import P2 from "../assets/p2.png"
import P3 from "../assets/p3.png"
import BlogImage from "../assets/blogImage.png"
import { useNavigate } from 'react-router-dom';
import Footer from './common/Footer'
import { motion } from "framer-motion";

function Home() {
    const navigate = useNavigate()
    return (
        <div>

            <div className='flex items-center justify-center'>

                <motion.div
                    className="w-full sm:w-1/2 flex-col justify-center"
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className='text-3xl md:text-6xl font-bold pb-2'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Hy! I Am
                    </motion.h2>

                    <motion.h2
                        className='text-4xl md:text-7xl font-bold text-orange-400 py-2'
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Kishore
                    </motion.h2>

                    <motion.img
                        src={BlogProfileImage}
                        className='w-60 block sm:hidden'
                        alt="Blog Profile Image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                    />

                    <motion.p
                        className='py-2'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        I can create stunning website for your company, Do check my works.
                        I won't disappoint you. Try me for 7 Days before you decide anything.
                    </motion.p>

                    <motion.button
                        className='button-style mt-2ml-2 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition'
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        Hire Me
                    </motion.button>
                </motion.div>

                <motion.div
                    className='justify-center hidden sm:block'
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.img
                        src={BlogProfileImage}
                        className='w-60 md:w-96'
                        alt="Blog Profile Image"
                        whileHover={{ scale: 1.05 }}
                    />
                </motion.div>

            </div>


            <motion.div
                className='flex justify-evenly py-6 flex-wrap gap-4'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >

                <motion.img
                    src={HTML}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.img
                    src={CSS}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                />

                <motion.img
                    src={JS}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity }}
                />

                <motion.img
                    src={REACTICON}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity }}
                />

                <motion.img
                    src={DB}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity }}
                />

                <motion.img
                    src={NODE}
                    style={{ width: "50px" }}
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                />

            </motion.div>

            <motion.div
                className='flex flex-col mt-10 items-center justify-around sm:flex-row'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

                <div className='flex-col'>

                    <motion.div
                        className='mt-4 border-[6px] rounded-lg border-purple-500 p-5 border-t-0 w-60 flex-col items-center'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10
                        }}
                    >
                        <motion.div
                            className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-purple-200 to-purple-600'
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            6
                        </motion.div>

                        <p className='text-center font-medium'>
                            Projects Completed
                        </p>
                    </motion.div>

                    <motion.div
                        className='mt-4 border-[6px] rounded-lg border-green-500 p-5 border-t-0 w-60 flex-col items-center'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10
                        }}
                    >
                        <motion.div
                            className='rounded-full border-2 p-5 font-bold text-white text-center bg-gradient-to-br from-green-200 to-green-600'
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity
                            }}
                        >
                            6
                        </motion.div>

                        <p className='text-center font-medium'>
                            Months of Experience
                        </p>
                    </motion.div>

                </div>

                <motion.div
                    className='ml-4 mt-4 sm:mt-0'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <motion.h2
                        className='text-3xl sm:text-7xl font-bold'
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        My Awesome
                    </motion.h2>

                    <motion.h2
                        className='text-3xl sm:text-7xl font-bold text-orange-400'
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Services
                    </motion.h2>

                    <motion.p
                        className='my-2'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        I have attached my Resume here for your Reference
                    </motion.p>

                    <motion.button
                        className='button-style mt-2ml-2 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition'
                        whileHover={{
                            scale: 1.1
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                    >
                        Download CV
                    </motion.button>

                </motion.div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

                <motion.h2
                    className='text-center text-5xl my-14 font-bold'
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Checkout My Live <span className='text-orange-400'>Projects</span> Here
                </motion.h2>

                <div className='flex justify-around my-5 flex-col sm:flex-row gap-6 items-center'>

                    <motion.img
                        src={P1}
                        className='w-64 border rounded-md cursor-pointer shadow-lg'
                        alt=""
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{
                            scale: 1.08,
                            y: -10,
                            rotate: 2
                        }}
                    />

                    <motion.img
                        src={P2}
                        className='w-64 border rounded-md cursor-pointer shadow-lg'
                        alt=""
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{
                            scale: 1.08,
                            y: -10
                        }}
                    />

                    <motion.img
                        src={P3}
                        className='w-64 border rounded-md cursor-pointer shadow-lg'
                        alt=""
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        whileHover={{
                            scale: 1.08,
                            y: -10,
                            rotate: -2
                        }}
                    />

                </div>

            </motion.div>


            <motion.div
                className='flex items-center justify-center my-14'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

                <motion.div
                    className='justify-center hidden sm:block'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    animate={{ y: [0, -15, 0] }}
                >
                    <motion.img
                        src={BlogImage}
                        className='w-60 md:w-96'
                        alt="Blog Profile Image"
                        whileHover={{
                            scale: 1.05,
                            rotate: -2
                        }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <motion.div
                    className="w-full sm:w-1/2 flex-col justify-center ml-6"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    <motion.h2
                        className='text-3xl md:text-6xl font-bold pb-2'
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        I like to Write
                    </motion.h2>

                    <motion.h2
                        className='text-4xl md:text-7xl font-bold text-orange-400 py-2'
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Blogs about tech
                    </motion.h2>

                    <motion.p
                        className='py-2'
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                    >
                        You can know better about me by reading my blogs here.
                        I share my expertise here.
                    </motion.p>

                    <motion.button
                        className='button-style mt-2ml-2 px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition'
                        onClick={() => navigate("/blogs")}
                        whileHover={{
                            scale: 1.1,
                            y: -3
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                    >
                        Read My Blogs
                    </motion.button>

                </motion.div>

            </motion.div>


            <Footer />


        </div>
    )
}

export default Home 