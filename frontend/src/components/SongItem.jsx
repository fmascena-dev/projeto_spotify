import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function SongItem ({ image, name, duration, artist, audio, id, index }) {
  return (
    <Link to={`/song/${id}`} className="song-item">
      <div className="song-item__number-album">
        <p>{index + 1}</p>

        <div className="song-item__album">
          <img
            src={image}
            alt={`Imagem da Música ${name}`}
            className="song-item__image"
          />

          <p className="song-item__name">{name}</p>
        </div>
      </div>

      <p>{duration}</p>
    </Link>
  );
};

SongItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  artist: PropTypes.string,
  audio: PropTypes.string,
  id: PropTypes.number.isRequired,
  idPath: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};