import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center h-[calc(100vh-80px)] ">
            <form className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 space-y-6">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold text-gray-700">Welcome to Readers</h1>                </div>


                <div className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-bold text-gray-600 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter your Username"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-bold text-gray-600 mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Enter your Password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Login
                </button>

              
                <div className="text-center text-sm text-gray-600">
                    Don’t have an account?{' '}
                    <Link to="/register" className="text-blue-500 underline">
                        Register
                    </Link>
                </div>

                <div className="text-center text-gray-500 mt-4 font-semibold">Or login with</div>
                <div className="flex justify-center space-x-4 mt-4">
                    <Link
                        to="#"
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition"
                    >
                        <FaGoogle className="text-red-500 mr-2" /> Google
                    </Link>
                    <Link
                        to="#"
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition"
                    >
                        <FaFacebook className="text-blue-600 mr-2" /> Facebook
                    </Link>
                    <Link
                        to="#"
                        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition"
                    >
                        <FaLinkedin className="text-blue-500 mr-2" /> LinkedIn
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
