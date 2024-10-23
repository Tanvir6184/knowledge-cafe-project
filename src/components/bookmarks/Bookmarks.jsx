import PropTypes from "prop-types";
import Bookmark from "../bookmark/Bookmark";


const Bookmarks = ({bookmarks, readingTime}) => {

    return (
        <div className="w-1/3 bg-slate-300 mt-14 rounded-xl p-4">
            <div>
                <h3 className="text-4xl">Reading Time: {readingTime} </h3>
            </div>

            <p>Bookmarks {bookmarks.length}</p>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;