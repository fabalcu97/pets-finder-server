import axios from "axios";

export let connection = axios.create({
  baseURL: `${process.env.REACT_APP_DOMAIN}/api/v1`,
});