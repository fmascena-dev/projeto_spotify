import express from 'express';
import { artistArray } from '../../frontend/src/assets/database/artists.js';
import { songsArray } from '../../frontend/src/assets/database/songs.js';
import { db } from './connect.js';

const app = express();
const PORT = 3000;

app.get('/', (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get('/artists', async (request, response) => {
  response.send(await db.collection('artists').find({}).toArray());
});

app.get('/songs', async (request, response) => {
  response.send(await db.collection('songs').find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
