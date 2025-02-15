// import axios from 'axios';

// const URL = 'http://localhost:3000';

// // Fazer requisição
// const responseArtists = await axios.get(`${URL}/artists`);
// const responseSongs = await axios.get(`${URL}/songs`);

// export const artistArray = responseArtists.data;
// export const songsArray = responseSongs.data

import axios from 'axios';

const URL = 'http://localhost:3000';

export const fetchData = async () => {
  try {
    const [responseArtists, responseSongs] = await Promise.all([
      axios.get(`${URL}/artists`),
      axios.get(`${URL}/songs`),
    ]);

    return {
      artists: responseArtists.data,
      songs: responseSongs.data,
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    return { artists: [], songs: [] };
  }
};
