import axiosClient from "./AxiosClient";

const getListCatagories = async (dispatch) => {
  try {
    const res = axiosClient.get("/catagories");
    dispatch(res.data);
  } catch (err) {
    console.log(err);
  }
};

// get(id) {
//   const url = `/catagories/${id}`;
//   return axiosClient.get(url);
// },

// add(data) {
//   const url = "/catagories";
//   return axiosClient.post(url, data);
// },

// update(data) {
//   const url = `/categories/${data.id}`;
//   return axiosClient.put(url, data);
// },

// remove(id) {
//   const url = `/categories/${id}`;
//   return axiosClient.delete(url);
// },

module.exports = {
  getListCatagories,
};
