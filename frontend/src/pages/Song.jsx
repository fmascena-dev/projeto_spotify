import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSongs } from '../assets/database/songs';
import { getArtists } from '../assets/database/artists';
import Player from '../components/Player';

export default function Song() {
  const { id } = useParams();
  const [songsArray, setSongsArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const songs = await getSongs();
      const artists = await getArtists();
      setSongsArray(songs);
      setArtistArray(artists);
    };
    fetchData();
  }, []);

  const song = songsArray.find((currentSongObj) => currentSongObj._id === id);
  if (!song) return <div>Carregando...</div>;

  const { image, name, duration, artist, audio } = song;

  const artistObj = artistArray.find(
    (currentArtistObj) => currentArtistObj.name === artist,
  );
  if (!artistObj) return <div>Carregando artista...</div>;

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artist,
  );

  const randomIndex = Math.floor(Math.random() * songsArrayFromArtist.length);
  const randomIndex2 = Math.floor(Math.random() * songsArrayFromArtist.length);

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]?._id || '';
  const randomId2FromArtist = songsArrayFromArtist[randomIndex2]?._id || '';

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomId2FromArtist={randomId2FromArtist}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
}
