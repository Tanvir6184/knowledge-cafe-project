import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({handleToBookmark, handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))

    },[])



    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog blog = {blog} handleMarkAsRead = {handleMarkAsRead} handleToBookmark = {handleToBookmark} key ={blog.id} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    handleToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;