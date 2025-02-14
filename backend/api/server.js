import express from 'express';
import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get('/', (request, response) => {
  response.send(artistArray);
});

app.get('/', (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
