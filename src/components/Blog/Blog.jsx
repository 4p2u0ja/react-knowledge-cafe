import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title ,cover, author , author_img,reading_time ,posted_date,hashtags}= blog
    return (
        <div>
            <img className="w-10/12 rounded "src={cover} alt={`cover pic of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex' >
                    <img className='rounded-full w-16 h-16' src={author_img}  alt="" />
                
                <div> 
                    {author} <br></br>  
                   <span className='font-bold' > publish date : </span>{posted_date}
                    
                </div>
                     
                </div>
                <div>
                 <span>{reading_time} min read</span> 

                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <div>
                {hashtags.map((hash ,idx)=> <span key = {idx}><a href=''># {hash}</a></span>)}
            </div>
        </div>
    );
};
Blog.propTypes ={blog:PropTypes.object.isRequired}
export default Blog;