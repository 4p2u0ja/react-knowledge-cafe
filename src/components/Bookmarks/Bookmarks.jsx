import PropTypes from 'prop-types'
import Bookmark from '../singelBookmark/Bookmark';
const Bookmarks = ({bookmarks ,readingTime}) => {
    return (
        <div className="md: w 1/3 bg-green-200 p-3 m-9 rounded-md mb-auto">
           <div>         
             <h3 className='text-2xl'>Reading time : {readingTime}</h3>
            </div>
           <h2 className="font-bold">Bookmarked blogs:{bookmarks.length}</h2> 
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;