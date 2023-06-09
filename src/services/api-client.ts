import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "91e04a092b5541bd8bdc5d9da60bbd56",
  },
});
