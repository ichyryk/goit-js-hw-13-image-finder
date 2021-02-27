import axios from 'axios';

const apiKey = '20385690-105053f6ffebd14297425162e';
export default {
  searchQuery: '',
  page: 1,
  async fetchImages() {
    const BASE_URL = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;
    return await axios
      .get(BASE_URL)
      .then(({ data: { hits } }) => {
        this.page += 1;
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};

// import axios from 'axios';

// axios.defaults.baseURL = 'https://pixabay.com/api/';

// const apiKey = '20385690-105053f6ffebd14297425162e';
// let page = 1;
// const fetchImages = async (searchImage) => {
//   const response = await axios.get(
//     `?image_type=photo&orientation=horizontal&q=${searchImage}&page=${page}&per_page=12&key=${apiKey}`,
//   );

//     page += 1;
//   return response.data.hits
// };

// const resetPage = () => {
//   page = 1;
// };

// export default { fetchImages, resetPage };

