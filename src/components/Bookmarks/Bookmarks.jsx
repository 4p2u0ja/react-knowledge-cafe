import PropTypes from 'prop-types'
import Bookmark from '../singelBookmark/Bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md: w 1/3 bg-green-200 p-3 m-9 rounded-md mb-auto">
           <h2 className="font-bold">Bookmarked blogs:{bookmarks.length}</h2> 
           {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
           }
        </div>
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array
}
export default Bookmarks;