import axios from "axios";

const api = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default async function getData(dados) {
  try {
    const response = await api.post('/predicao', dados);
    console.log('Resposta:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro na requisição:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Dados:', error.response.data);
    }
    throw error;
  }
}