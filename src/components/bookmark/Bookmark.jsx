import PropTypes from "prop-types";


const Bookmark = ({bookmark}) => {
    const {title} = bookmark;

    return (
        <div className="bg-slate-200 m-4 rounded-xl p-2">
            <h3 className="text-3xl">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    Bookmark: PropTypes.object
}
export default Bookmark;