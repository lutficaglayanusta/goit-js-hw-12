import axios from 'axios';

import iziToast from 'izitoast';
// Stil importu
import 'izitoast/dist/css/iziToast.min.css';

const api_key = '51088577-7b521529318281431558696f8';



export const fetchImages = async (input, page,per_page) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: api_key,
        q: input,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: per_page,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
    });
  }
};
