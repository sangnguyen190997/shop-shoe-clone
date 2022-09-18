import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { getListProduct } from "../services/API/ProductsApi";
import ProductSlideLoading from "./ProductSlideLoading";
import ProductThumb from "./ProductThumb";
export default function BestSale() {
  const productList = useSelector(
    (state) => state.product.products?.allProduct
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const sliderSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };
  useEffect(() => {
    setLoading(true);
    getListProduct(dispatch);
    setLoading(false);
  }, []);

  const saleProduct = productList?.filter((product) => {
    return product.promotionPercent >= 25;
  });

  const handleMore = () => {
    navigate("/products");
  };

  return (
    <div className="mt-12">
      <div className="flex justify-between items-baseline">
        <p className="relative text-2xl font-semibold pl-2 mb-4 bg-amber-300 section-title">
          Giảm giá sốc
        </p>
        <button
          onClick={handleMore}
          className="text-sm hover:cursor-pointer hover:opacity-70 bg-amber-300 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded "
        >
          Xem Thêm
        </button>
      </div>
      <div className="sm:-mx-2 md:-mx-2 lg:-mx-2">
        <Slider {...sliderSettings}>
          {saleProduct?.map((product) => {
            return (
              <div key={product.id} className=" sm:-mx-2 md:-mx-2 lg:-mx-2">
                <ProductThumb product={product} />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
