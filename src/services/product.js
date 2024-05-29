import ApiClient from "./apiClient.js";

const productApi = {
  getAllProduct: () => {
    return ApiClient.get("/anime");
  },
  getSingleProduct: (id) => {
    return ApiClient.get(`/anime/${id}`);
  },

  getSearchProduct: (key) => {
    return ApiClient.get(`/anime/?q=${key}&order_by=title&sort=asc&limit=10`);
  },
};

export default productApi;
