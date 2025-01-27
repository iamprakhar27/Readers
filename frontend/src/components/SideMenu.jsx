
import { Link } from "react-router-dom"
import Search  from "./Search"

const SideMenu = () => {
    return(
        <div className="px-4 h-max sticky top-8">
            <h1 className="mb-4 text-sm font-medium font-semibold">Search</h1>
            <Search/>
            <h1 className=" mt-8 mb-4 text-sm font-medium font-semibold">Filter</h1>
             <div className="flex flex-col gap-2 text-sm">
                <label htmlFor="" className="flex gap-2 items-center cursor-pointer">
                    <input 
                    type="radio"
                    name="sort"
                    value="newest"
                    className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
                    />Newest
                </label>

                <label htmlFor="" className="flex gap-2 items-center cursor-pointer">
                    <input 
                    type="radio"
                    name="sort"
                    value="popular"
                    className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
                    />Popular
                </label>

                <label htmlFor="" className="flex gap-2 items-center cursor-pointer">
                    <input 
                    type="radio"
                    name="sort"
                    value="trending"
                    className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
                    />Trending
                </label>

                <label htmlFor="" className="flex gap-2 items-center cursor-pointer">
                    <input 
                    type="radio"
                    name="sort"
                    value="oldest"
                    className="appearance-none bg-white w-4 h-4 border-[1.5px] border-blue-800 cursor-pointer rounded-sm checked:bg-blue-800"
                    />Oldest
                </label>

             </div>
            <h1 className=" mt-8 mb-4 text-sm font-medium font-semibold">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link className="underline" to="/posts">All</Link>
                <Link className="underline" to="/posts?cat=web-desgin">web design</Link>
                <Link className="underline" to="/posts?cat=development">Development</Link>
                <Link className="underline" to="/posts?cat=database">Database</Link>
                <Link className="underline" to="/posts?marketing">Marketing</Link>
                <Link className="underline" to="/posts?cat=seo">Search Engines</Link>

            </div>



        </div>
    )

}

export default SideMenu