import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-400">
            <h1>Spend: {readingTime} Min</h1>

            <h2>Bookmarks:{bookmarks.length}</h2>
            

            {bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark} />)}
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;