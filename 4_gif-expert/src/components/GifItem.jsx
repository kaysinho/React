import PropTypes from 'prop-types';

const GifItem = ( { img } ) => {
    return ( <div className="card"> <img src={ img.url } alt={ img.title } /> <p>{ img.title }</p> </div> );
}
 
export default GifItem;

GifItem.propTypes = {
    img: PropTypes.object.isRequired
}