
const PostMenuActions = () => {
    return (
        <div className="">
            <h1 className="mt-8 mb-4 text-sm font-medium font-semibold">Actions</h1>
            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 3H6.75A2.25 2.25 0 004.5 5.25v15.177a.75.75 0 001.184.614l6.066-4.044a.75.75 0 01.822 0l6.066 4.044a.75.75 0 001.184-.614V5.25A2.25 2.25 0 0017.25 3z"
                    />
                </svg>
                <span>Save this Post</span>
            </div>

            <div className="flex items-center gap-2 py-2 text-sm cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 10.5V19.5A2.25 2.25 0 008.25 21.75h7.5A2.25 2.25 0 0018 19.5v-9M9 10.5V7.5a3 3 0 116 0v3M4.5 6h15M10.5 9v6M13.5 9v6"
                    />
                </svg>
                <span>Delete this Post</span>
            </div>

        </div>
    )


}

export default PostMenuActions