
import Image from "./Image"
import { Link } from "react-router-dom"

const PostListItem = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-8">

            <div className="md:hidden xl:block xl:w-1/3">
                <Image src="img7.jpg" className="rounded-2xl object-cover" w="735" />
            </div>
            <div className="flex flex-col gap-4 xl:w-2/3">
                <Link to="/test" className="text-4xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span>written by</span>
                    <Link className="text-blue-800">john doe</Link>
                    <span>on</span>
                    <Link className="text-blue-800">web design</Link>
                    <span>2 days ago</span>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel maiores ullam ad velit blanditiis?
                    Labore natus voluptatibus porro illo saepe, cumque ea, eum sequi delectus aut molestias maxime quis debitis.
                </p>
                <Link to="/test" className="underline text-blue-800 text-sm">Read More</Link>
            </div>

        </div>
    )
}
export default PostListItem