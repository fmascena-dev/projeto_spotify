import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArtists } from '../assets/database/artists';
import { getSongs } from '../assets/database/songs';
import SongList from '../components/SongList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

export default function Artist() {
  const { id } = useParams();
  const [artistArray, setArtistArray] = useState([]);
  const [songsArray, setSongsArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const artists = await getArtists();
      const songs = await getSongs();
      setArtistArray(artists);
      setSongsArray(songs);
    };
    fetchData();
  }, []);

  const artist = artistArray.find(
    (currentArtistObj) => currentArtistObj._id === id,
  );
  if (!artist) return <div>Carregando...</div>;

  const { name, banner } = artist;

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === name,
  );

  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id || '';

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})`,
        }}
      >
        <h2 className="artist__title">{name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist} />
      </div>

      {randomIdFromArtist && (
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      )}
    </div>
  );
}
