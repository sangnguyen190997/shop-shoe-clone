import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListProduct } from "../services/API/ProductsApi";

export default function SizeFilter() {
  const dispatch = useDispatch();
  const [size, setSize] = useState([]);
  const sizeList = useSelector((state) => state.product.products?.allProduct);

  useEffect(() => {
    getListProduct(dispatch);
  }, []);

  sizeList?.map((item, index) => {
    if (!size.includes(item.size)) {
      size.push(item.size);
    }
  });

  return (
    <div className="mb-8">
      <h6 className="text-xl font-medium mt-3">KÍCH THƯỚC</h6>
      {size?.map((item, index) => {
        return (
          <label key={index} className="checkbox-container">
            <input type="checkbox" />
            <span className="checkmark"></span>
            {item}
          </label>
        );
      })}
    </div>
  );
}
