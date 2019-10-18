import axios from "axios";
const api = axios.create();

import config from "./config/config";

api.defaults.Url = config.Url;

export default api;