import { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getArtists } from '../assets/database/artists';
import { getSongs } from '../assets/database/songs';
import PropTypes from 'prop-types';

export default function Main({ type }) {
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

  return (
    <div className="main">
      {/* Item List de Artistas */}
      {(type === 'artists' || type === undefined) && (
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      )}

      {/* Item List de Músicas */}
      {(type === 'songs' || type === undefined) && (
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      )}
    </div>
  );
}

Main.propTypes = {
  type: PropTypes.string,
};
