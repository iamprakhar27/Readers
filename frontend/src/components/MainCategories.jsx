import { FaGripLinesVertical } from "react-icons/fa"
import { Link } from "react-router-dom"


const MainCategories = () => {
    return (
        <div className="hidden md:flex bg-white rounded-3xl xl:rounded-full p-4 shadow-lg items-center justify-center gap-8 ">
            <div className="flex-1 flex items-center justify-between flex-wrap">
                <Link to="/posts" className="bg-blue-800 text-white rounded-full px-4 py-2">All Posts</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Web Design</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Development</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Database</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Marketing</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Search Engines</Link>
                <Link to="/posts?cat=web-design" className="hover:bg-blue-50 rounded-full px-4 py-2">Marketing</Link>
                
                <FaGripLinesVertical className="text-gray-300 text-xl" />
                <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">

                    <input
                        type="text"
                        placeholder="Search a post..."
                        className="bg-transparent outline-none text-sm w-full" 
                    />
                </div>


            </div>
        </div>
    )
}

export default MainCategories 