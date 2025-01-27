
import { Link } from 'react-router-dom';
import { FaPenNib } from "react-icons/fa";
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostLists from '../components/PostLists';

const HomePage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4 ">
            <div className="flex gap-4">
                <Link to="/">Home</Link>
                <span>*</span>
                <span className='text-blue-800'>Blogs and Articles</span>
            </div>

            <div className='flex items-center justify-center'>
                <div className=''>
                    <h1 className='text-gray-800 text-2xl md:text-5xl lg:text-6xl'>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                    <p className='mt-8 text-md md:text-xl'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio sunt nemo hic </p>
                </div>

                <Link to="write" className='hidden md:block relative'>
                    <svg
                        viewBox='0 0 200 200'
                        width="200"
                        height="200"
                        // className='text-lg tracking-widest animate-spin animatedButton'
                         className='text-lg tracking-widest'

                    >
                        <path
                            id="circlePath"
                            fill='none'
                            d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                        />
                        <text>
                            <textPath href='#circlePath' startOffset="0%">Write your story .</textPath>
                            <textPath href='#circlePath' startOffset="50%">Share your Ideas .</textPath>
                        </text>
                    </svg>
                    <button
                        className='bg-blue-800 absolute top-0 left-0 right-0 bottom-0 w-24 h-24 rounded-full flex items-center justify-center'
                        style={{ width: '100px', height: '100px', transform: 'translate(-50%, -50%)', left: '50%', top: '50%' }}
                    >
                        <FaPenNib size={50} color="white" />
                    </button>
                </Link>

            </div>
            <MainCategories/>
            <FeaturedPosts/>

            <div className=''>
                <h1 className='my-8 text-2xl text-gray-600 font-bold'>Recent posts</h1>
                <PostLists/>
            </div>

        </div>
    )
}

export default HomePage;