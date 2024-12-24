import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog,handleBookmark,handleReadingTime}) => {
   const {title,cover,reading_time,author,author_img,posted_date,hashtags} = blog;
    return (
        <div className='mb-20'>
          
            
            <img className='w-full' src={cover} alt={title} />
            <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center space-x-6 '>
                <div><img className='w-14 rounded-full' src={author_img} alt="" /></div>
                <div>
                    <h3>{author}</h3>
                    <p>{posted_date}</p>
                </div>

            </div>
            <div>
{`${reading_time} min read`}
<button className='ml-2' onClick={()=>handleBookmark(blog)}><CiBookmark /></button>
            </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map(hashtag => <span key={hashtag} className='mr-2'><a href="">#{hashtag}</a></span>)}
            </p>
            <button onClick={()=>handleReadingTime(blog.reading_time)}>Mark as read</button>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmark: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired
}
export default Blog;
