
import PropTypes from 'prop-types';

Bookmark.propTypes = {
     bookmark: PropTypes.object.isRequired
};

function Bookmark({bookmark}) {
    const {title} = bookmark;
    return (
        <div className='bg-slate-400 p-4 mb-4'>
            <h3 className='text-3xl'>{title}</h3>
        </div>
    );
}

export default Bookmark;