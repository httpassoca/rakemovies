import axios from "../http-common";
import { IFilm } from "../stores/movies.types";

export default {
  async getFilm(title: string): Promise<IFilm> {
    console.log('test 3')
    return axios.get('', {
      params: {
        't': title,
      }
    }).then((res) => res.data);
  },
};