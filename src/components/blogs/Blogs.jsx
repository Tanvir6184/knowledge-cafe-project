import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = ({handleToBookmark}) => {
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
                blogs.map(blog => <Blog blog = {blog} handleToBookmark = {handleToBookmark} key ={blog.id} ></Blog>)
            }
        </div>
    );
};

export default Blogs;