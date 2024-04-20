"use client";

import { useState } from "react";
// import "./AdminHeader.scss";
import { IoMdMenu } from "react-icons/io";

import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { setIsSideBarOpen } from "@/redux/slices/sidebarSlice";

export default function Header() {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.isSideBarOpen);

  return (
    <div className="admin-header-container shadow-md min-h-[60px] flex items-center">
      <div className="max-width flex justify-between items-center">
        {/* LEFT SIDE **** */}
        <div className="flex items-center justify-center gap-3">
          <IoMdMenu
            className="text-[2.8rem] cursor-pointer"
            onClick={() => dispatch(setIsSideBarOpen(!isOpen))}
          />
          <h2 className="text-[1.8rem] font-semibold text-[#3855b3]">
            Test Assignment
          </h2>
        </div>

        {/* RIGHT SIDE ******* */}
        <div className="flex items-center gap-6">
          <Image
            src={
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="profile"
            width={25}
            height={25}
            className="rounded-full w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
}
