import axios from "../http-common";
import { IFilm } from "../stores/movies.types";

export default {
  async getFilm(title: string): Promise<IFilm> {
    return axios.get('', {
      params: {
        't': title,
      }
    }).then((res) => res.data);
  },
};