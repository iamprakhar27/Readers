
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new"

const Write = () => {


    return (
        <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-8">
            <h1 className="text-xl font-light font-semibold">Post Your New Story ...</h1>
            <form className="flex flex-col gap-6 flex-1 mb-6">
                <button className="w-max p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white ">Add a cover Image</button>
                <input type="text" placeholder="My Awesome Story" className="text-4xl font-semibold outline-none bg-transparent" />
                <div className="flex items-center gap-4">
                    <label htmlFor="" className="text-sm">Choose a category:</label>
                    <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
                        <option value="general">General</option>
                        <option value="web design">Web Design</option>
                        <option value="development">Development</option>
                        <option value="database">Database</option>
                        <option value="seo">Search Engines</option>
                        <option value="marketing">Marketing</option>
                    </select>
                </div>
                <textarea name="desc" placeholder="A short description" className="p-4 rounded-xl bg-white shadow-md" />
                <ReactQuill theme="snow" className="flex-1 rounded-xl bg-white shadow-md" />
                <button className="bg-blue-800 text-white font-medium rounded-xl mt-4 p-2 w-36">
                    Publish
                </button>
            </form>
        </div>
    )
}

export default Write;