import axios from 'axios'; //

axios.defaults.baseURL = 'https://reqres.in/api/products';

export async function getData(page) {
  try {
    const response = await axios.get(`?per_page=5&page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getById(id) {
  try {
    const response = await axios.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
