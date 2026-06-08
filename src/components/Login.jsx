import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulate login process
        console.log('User logged in:', { email, password });

        // Redirect to homepage/dashboard after login
        // Replace '/home' with your homepage route
        navigate('/home');
    };

    return (
        <motion.div
            className="flex justify-center items-center h-screen bg-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >

            <motion.form
                onSubmit={handleLogin}
                className="p-10 bg-white rounded-lg shadow-md"
                style={{ width: "75%" }}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{
                    y: -5
                }}
            >

                <motion.h2
                    className="text-2xl font-bold mb-5 text-gray-800"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Login
                </motion.h2>

                <div className="mb-4">
                    <label className="block text-gray-700">
                        Email:
                    </label>

                    <motion.input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                        whileFocus={{
                            scale: 1.02
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">
                        Password:
                    </label>

                    <motion.input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 w-full border rounded"
                        whileFocus={{
                            scale: 1.02
                        }}
                    />
                </div>

                <motion.p
                    className="text-blue-600 cursor-pointer my-2"
                    onClick={() => navigate("/signup")}
                    whileHover={{
                        x: 5
                    }}
                >
                    New user? Register here
                </motion.p>

                <motion.button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200 ease-in-out"
                    whileHover={{
                        scale: 1.08,
                        y: -2
                    }}
                    whileTap={{
                        scale: 0.95
                    }}
                >
                    Login
                </motion.button>

            </motion.form>

        </motion.div>
    );
}

export default Login;