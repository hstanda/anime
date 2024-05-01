import ApiClient from "./apiClient.js";

const productApi = {
  getAllProduct: (value) => {
    const queryParam = value
      ? `?q=${value}&order_by=title&sort=asc&limit=10`
      : "";
    return ApiClient.get(`/anime${queryParam}`);
  },
  getSingleProduct: (id) => {
    return ApiClient.get(`/anime/${id}`);
  },
};

export default productApi;
