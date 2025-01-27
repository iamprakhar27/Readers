import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                {/* <img src="" alt="" /> */}
                <span className="text-teal-900">Readers</span>
            </Link>

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div
                    className="cursor-pointer text-4xl"
                    onClick={() => setOpen((prev) => !prev)}>
                    {open ? <FaTimes /> : <FaBars />}
                </div>
                <div
                    className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out bg-gray-500 bg-opacity-90 ${open ? "right-0" : "-right-[100%]"}`}>
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/" className="text-white">Trending</Link>
                    <Link to="/" className="text-white">Most Popular</Link>
                    <Link to="/" className="text-white">About</Link>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-teal-800 text-white cursor-pointer">
                            Login
                        </button>
                    </Link>
                </div>
            </div>


            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>

                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-teal-800 text-white cursor-pointer">
                            Login
                        </button>
                    </Link>

            </div>
        </div>
    )

}

export default Navbar