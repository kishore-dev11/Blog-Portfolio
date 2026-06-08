import React from "react";
import { motion } from "framer-motion";

function Footer() {
    return (
        <motion.footer
            className="bg-gray-900 text-white mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h2
                            className="text-2xl font-bold text-orange-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            BlogVerse
                        </motion.h2>

                        <p className="text-gray-400 mt-3">
                            Discover inspiring stories,
                            ideas, and knowledge from
                            writers around the world.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            Quick Links
                        </h3>

                        <ul className="space-y-2 text-gray-400">

                            <motion.li whileHover={{ x: 10 }}>
                                <a
                                    href="/"
                                    className="hover:text-orange-400 transition"
                                >
                                    Home
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ x: 10 }}>
                                <a
                                    href="/blogs"
                                    className="hover:text-orange-400 transition"
                                >
                                    Blogs
                                </a>
                            </motion.li>

                            <motion.li whileHover={{ x: 10 }}>
                                <a
                                    href="/login"
                                    className="hover:text-orange-400 transition"
                                >
                                    Login
                                </a>
                            </motion.li>

                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                    >
                        <h3 className="text-lg font-semibold mb-3">
                            Contact
                        </h3>

                        <motion.p
                            className="text-gray-400"
                            whileHover={{ scale: 1.05 }}
                        >
                            📧 support@blogverse.com
                        </motion.p>

                        <motion.p
                            className="text-gray-400 mt-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            📍 Salem, Tamil Nadu
                        </motion.p>
                    </motion.div>

                </div>

                <motion.hr
                    className="border-gray-700 my-6"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                />

                <motion.div
                    className="text-center text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    © {new Date().getFullYear()} BlogVerse.
                    All Rights Reserved.
                </motion.div>

            </div>
        </motion.footer>
    );
}

export default Footer;