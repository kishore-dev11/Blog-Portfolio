import React from "react";
import { motion } from "framer-motion";

function About() {
    return (
        <motion.div
            className="min-h-screen bg-gray-100 py-16 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <motion.div
                    className="text-center mb-14"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl font-bold">
                        About <span className="text-orange-500">BlogVerse</span>
                    </h1>

                    <p className="text-gray-600 mt-4 text-lg">
                        Sharing knowledge, ideas, and stories with the world.
                    </p>
                </motion.div>
                {/* About Section */}

                <motion.div
                    className="grid md:grid-cols-2 gap-10 items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    <motion.img
                        src="https://images.unsplash.com/photo-1455390582262-044cdead277a"
                        alt="About Blog"
                        className="rounded-2xl shadow-lg"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        whileHover={{
                            scale: 1.05,
                            rotate: -1
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <motion.h2
                            className="text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            Who We Are
                        </motion.h2>

                        <motion.p
                            className="text-gray-600 leading-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            BlogVerse is a modern blogging platform designed
                            for writers, readers, and creators. Our mission is
                            to provide a space where people can share their
                            thoughts, experiences, and expertise with a global
                            audience.
                        </motion.p>

                        <motion.p
                            className="text-gray-600 leading-8 mt-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            Whether you're passionate about technology,
                            travel, lifestyle, education, or personal growth,
                            BlogVerse helps you connect with readers and build
                            a meaningful community.
                        </motion.p>

                    </motion.div>

                </motion.div>
                {/* Features */}

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    <motion.h2
                        className="text-4xl font-bold text-center mb-10"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Why Choose Us?
                    </motion.h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg"
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10
                            }}
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-3"
                                whileHover={{ scale: 1.05 }}
                            >
                                ✍ Easy Publishing
                            </motion.h3>

                            <p className="text-gray-600">
                                Create and publish blogs quickly with a clean
                                and user-friendly interface.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg"
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10
                            }}
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-3"
                                whileHover={{ scale: 1.05 }}
                            >
                                🌍 Global Audience
                            </motion.h3>

                            <p className="text-gray-600">
                                Reach readers worldwide and share your ideas
                                with a growing community.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-lg"
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            whileHover={{
                                scale: 1.05,
                                y: -10
                            }}
                        >
                            <motion.h3
                                className="text-xl font-semibold mb-3"
                                whileHover={{ scale: 1.05 }}
                            >
                                🚀 Modern Experience
                            </motion.h3>

                            <p className="text-gray-600">
                                Built with modern technologies for speed,
                                security, and performance.
                            </p>
                        </motion.div>

                    </div>

                </motion.div>
                {/* Team Section */}

                <motion.div
                    className="mt-20 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >

                    <motion.h2
                        className="text-4xl font-bold mb-6"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Meet The Creator
                    </motion.h2>

                    <motion.div
                        className="bg-white shadow-lg rounded-xl p-8 max-w-md mx-auto"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        whileHover={{
                            scale: 1.05,
                            y: -10,
                        }}
                    >

                        <motion.img
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt="Profile"
                            className="w-28 h-28 mx-auto mb-4"
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{
                                scale: 1.1,
                                rotate: 5,
                            }}
                        />

                        <motion.h3
                            className="text-2xl font-semibold"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            Kishore
                        </motion.h3>

                        <motion.p
                            className="text-gray-500"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Full Stack Developer
                        </motion.p>

                        <motion.p
                            className="text-gray-600 mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            Passionate about building modern web applications
                            using React, Node.js, Express, and MongoDB.
                        </motion.p>

                    </motion.div>

                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;