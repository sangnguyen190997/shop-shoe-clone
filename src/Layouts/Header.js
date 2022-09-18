import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full h-16 lg:h-20 bg-white shadow-sm shadow-gray-200 fixed top-0 z-20">
      <div className="container px-4 lg:px-8 mx-auto">
        <div className="hidden lg:flex">
          <div className="leading-[5rem] text-4xl text-amber-300 font-bold text-shadow-xl shadow-yellow-400">
            YOLOSTORE
          </div>
          <div className="flex-1 text-center space-x-6">
            <NavLink
              to="/"
              className="leading-[5rem] text-base font-semibold pb-1"
            >
              TRANG CHỦ
            </NavLink>
            <NavLink
              to="/products"
              className="leading-[5rem] text-base font-semibold pb-1"
            >
              SẢN PHẨM
            </NavLink>
            <NavLink
              to="/contact"
              className="leading-[5rem] text-base font-semibold pb-1"
            >
              LIÊN HỆ
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/login"
              className="text-base font-semibold leading-[5rem] m-2 hover:cursor-pointer"
            >
              Đăng Ký
            </NavLink>
            <NavLink
              to="/login"
              className="text-base font-semibold leading-[5rem] m-2 hover:cursor-pointer"
            >
              Đăng nhập
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
