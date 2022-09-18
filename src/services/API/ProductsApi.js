import {
  getProductsFailed,
  getProductsStart,
  getProductsSuccess,
} from "../../redux/productSlice";
import axiosClient from "./AxiosClient";

export const getListProduct = async (dispatch) => {
  getProductsStart();
  try {
    const res = await axiosClient.get("/products");
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    getProductsFailed(err);
  }
};
// get(id) {
//   const url = `/products/${id}`;
//   return axiosClient.get(url);
// },
// add(data) {
//   const url = "/products";
//   return axiosClient.post(url, data);
// },
// update(data) {
//   const url = `/products/${data.id}`;
//   return axiosClient.put(url, data);
// },
// remove(id) {
//   const url = `/products/${id}`;
//   return axiosClient.delete(url);
// },
