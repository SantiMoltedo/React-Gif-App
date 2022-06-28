import PropTypes from "prop-types"

export const GifCard = ({ gif }) => {
    return (
        <div key={gif.id} className="card">
            <p>{gif.title}</p>
            <img src={gif.url}></img>
        </div>
    )
}

GifCard.propTypes = {
    gif: PropTypes.object.isRequired,
}