import { api } from "../httpClient";

const getHomeData = () => api.get("/posts");

export { getHomeData };
