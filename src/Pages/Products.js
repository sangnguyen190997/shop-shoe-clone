import React from "react";
import ProductsFilter from "../Components/ProductsFilter";

export default function Products() {
  return (
    <div className="my-20 lg:my-28">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3">FOR YOU</h4>
          <p className="text-base font-light">
            Tất cả những sản phẩm Mới nhất nằm trong BST được mở bán Hàng Tuần
            sẽ được cập nhật liên tục tại đây. Chắc chắn bạn sẽ tìm thấy những
            sản phẩm Đẹp Nhất - Vừa Vặn Nhất - Phù Hợp nhất với phong cách của
            mình.
          </p>
        </div>
        <div className="fixed bottom-4 right-4 z-30 text-sm font-medium px-4 py-1 mb-4 inline-block border border-solid border-gray-500  text-white bg-black hover:text-black hover:bg-white hover:cursor-pointer lg:hidden animate-pulse">
          BỘ LỌC
        </div>
        <div className="flex justify-between">
          <div className="h-full w-1/4 hidden lg:flex flex-column">
            <ProductsFilter />
          </div>
        </div>
      </div>
    </div>
  );
}
