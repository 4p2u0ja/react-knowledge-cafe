import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";

const Blog = ({blog ,handleAddToBookmark ,handleMarkAsRead}) => {
    const {title ,cover, author , author_img,reading_time ,posted_date,hashtags}= blog
    return (
        <div>
            <img className=" rounded mb-8 "src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between space-y-6'>
                <div className='flex space-x-3' >
                    <img className='rounded-full w-16 h-16 -mt-2' src={author_img}  alt="" />
                
                <div> 
                    {author} <br></br>  
                   <span className='font-bold' > publish date : </span>{posted_date}
                    
                </div>
                     
                </div>
                <div>
                 <span>{reading_time} min read</span> 
                 <button onClick={()=>handleAddToBookmark(blog)}
                 className='m-2 text-2xl text-red-600'
                 ><FaBookmark></FaBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>
                {hashtags.map((hash ,idx)=> <span key = {idx}><a href=''># {hash}</a></span>)
                
                }
            </p>
            <button onClick={ ()=>handleMarkAsRead(reading_time)}
            className='text-pink-900 underline font-bold mb-4'>mark as read</button>
        </div>
    );
};
Blog.propTypes ={blog:PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead:PropTypes.func
}
export default Blog;