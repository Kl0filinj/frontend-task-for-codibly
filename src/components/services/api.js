// import { toast } from 'react-toastify';
import axios from 'axios'; //

axios.defaults.baseURL = 'https://reqres.in/api/products';

export async function getData(page) {
  try {
    const response = await axios.get(`?page=${page}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

// export async function addFilm(newFilm) {
//   try {
//     const response = await axios.post(`films`, newFilm);
//     toast.success('You have successfully added an entry');
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// }
