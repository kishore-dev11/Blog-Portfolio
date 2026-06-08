import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "./common/Footer";
import { motion } from "framer-motion";

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");

    const fetchBlogs = async () => {
        try {
            const res = await axios.get(
                "http://localhost:5000/api/blogs"
            );

            setBlogs(res.data);
        } catch (error) {
            console.log("Error fetching blogs");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchBlogs();
    }, []);

    const handleLike = async (id) => {
        try {
            await axios.patch(
                `http://localhost:5000/api/blogs/like/${id}`
            );

            fetchBlogs();
        } catch (error) {
            console.log(error);
        }
    };

    const handleNewBlogSubmit = async (e) => {
        e.preventDefault();

        const today = new Date();

        const date = today.toLocaleDateString(
            "en-US",
            {
                year: "numeric",
                month: "long",
                day: "numeric",
            }
        );

        try {
            await axios.post(
                "http://localhost:5000/api/blogs",
                {
                    newTitle,
                    newContent,
                    date,
                    likes: 0,
                }
            );

            setNewTitle("");
            setNewContent("");

            fetchBlogs();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <motion.div
            className="min-h-screen bg-gray-100 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.h1
                className="text-center text-5xl font-bold mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Latest
                <span className="text-orange-500">
                    {" "}
                    Blogs
                </span>{" "}
                📚
            </motion.h1>

            {/* Add Blog Form */}

            <motion.div
                className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg mb-10"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <form
                    onSubmit={handleNewBlogSubmit}
                    className="space-y-4"
                >
                    <input
                        type="text"
                        placeholder="Enter Blog Title"
                        value={newTitle}
                        onChange={(e) =>
                            setNewTitle(e.target.value)
                        }
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <textarea
                        placeholder="Write your blog..."
                        value={newContent}
                        onChange={(e) =>
                            setNewContent(e.target.value)
                        }
                        rows="5"
                        className="w-full border p-3 rounded-lg"
                        required
                    />

                    <button
                        type="submit"
                        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
                    >
                        Publish Blog
                    </button>
                </form>
            </motion.div>

            {/* Loading */}

            {loading ? (
                <h2 className="text-center text-xl">
                    Loading Blogs...
                </h2>
            ) : blogs.length === 0 ? (
                <motion.h2
                    className="text-center text-xl font-semibold text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        y: [0, -8, 0]
                    }}
                    transition={{
                        opacity: { duration: 1 },
                        y: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    No Blogs Available 📭
                </motion.h2>
            ) : (
                <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog._id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition"
                        >
                            <h2 className="text-2xl font-bold mb-3">
                                {blog.newTitle}
                            </h2>

                            <p className="text-gray-400 text-sm mb-3">
                                {blog.date}
                            </p>

                            <p className="text-gray-600 mb-5 line-clamp-4">
                                {blog.newContent}
                            </p>

                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() =>
                                        handleLike(blog._id)
                                    }
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                                >
                                    👍 Like
                                </button>

                                <span className="font-semibold">
                                    ❤️ {blog.likes}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Footer />
        </motion.div>
    );
}

export default Blogs;