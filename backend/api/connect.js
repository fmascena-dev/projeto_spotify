import { MongoClient } from 'mongodb';

const URI =
  'mongodb+srv://dbFelipe:dbFelipeDev@cluster0.fgeif.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const client = new MongoClient(URI);

export const db = client.db('spotifyAula');

