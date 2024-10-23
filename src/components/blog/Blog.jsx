import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog, handleToBookmark, handleMarkAsRead}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;

    return (
        <div className='mb-20 my-4 space-y-4'>
            <img className='rounded-lg' src={cover} alt= {`Cover picture of the ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex mt-4'>
                    <img className='w-14 h-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>    
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleToBookmark(blog)} className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p className='mt-4'>
                {
                    hashtags.map((hash, idx) =>(<span key={idx}><a href="">{hash}</a></span>))
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 font-bold underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;