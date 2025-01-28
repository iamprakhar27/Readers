import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FaGoogle, FaFacebook, FaLinkedin } from "react-icons/fa";

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen p-4 sm:p-6">
        <form className="w-full max-w-md bg-white shadow-lg rounded-xl sm:rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="text-center">
                <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">Welcome to Readers</h1>
            </div>

            <div className="space-y-4">
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Enter your Username"
                        className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    />
                
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="Enter your Password"
                            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        >
                            {showPassword ? <AiOutlineEyeInvisible className="text-lg" /> : <AiOutlineEye className="text-lg" />}
                        </button>
                    
                </div>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
            >
                Login
            </button>

            <div className="text-center text-sm text-gray-600">
               Dont't have an account ?{' '}
                <Link to="/register" className="text-blue-500 hover:underline font-medium">
                    Register
                </Link>
            </div>

            <div className="relative mt-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or login with</span>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
                <Link
                    to="#"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition text-sm sm:text-base"
                >
                    <FaGoogle className="text-red-500 mr-2" /> Google
                </Link>
                <Link
                    to="#"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition text-sm sm:text-base"
                >
                    <FaFacebook className="text-blue-600 mr-2" /> Facebook
                </Link>
                <Link
                    to="#"
                    className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:shadow-md hover:border-gray-400 transition text-sm sm:text-base"
                >
                    <FaLinkedin className="text-blue-500 mr-2" /> LinkedIn
                </Link>
            </div>
        </form>
    </div>
    );
};

export default LoginPage;
