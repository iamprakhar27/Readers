
const Search = () => {
    return (
        <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-500"
            >
                <circle cx="11" cy="11" r="8" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="16" y1="16" x2="22" y2="22" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <input
                type="text"
                placeholder="searcg a post ..."
                className="bg-transparent outline-none text-sm w-full"
            />
        </div>
    )

}
export default Search