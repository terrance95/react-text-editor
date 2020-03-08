import axios from 'axios';
const notesApi = axios.create({
  baseURL: 'http://localhost:5000/api/notes'
});

export const getAllPhotos = () => notesApi.get('');

export const createNote = (payload: any) =>
  notesApi.post('', {
    title: payload.blocks[0].data.text,
    body: payload
  });
