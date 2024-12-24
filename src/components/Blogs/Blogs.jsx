import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmark,handleReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('./blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }   , [])

    return (
        <div className="md:width-2/3">
    <h1 className="text-4xl">Blogs</h1>
   {blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} handleReadingTime={handleReadingTime}/>)}
        </div>
    );
};

Blogs.propTypes = {
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blogs;