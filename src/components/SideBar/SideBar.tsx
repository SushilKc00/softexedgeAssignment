"use client";

import React from "react";
import "./SideBar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SideLinks from "@/datas/AdminSidleLinks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { setIsSideBarOpen } from "@/redux/slices/sidebarSlice";

export default function SideBar() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const { isOpen } = useAppSelector((state) => state.isSideBarOpen);
  const pathname = usePathname();
  return (
    <div
      className="side-bar-container"
      style={{
        left: isOpen ? "0" : "-100%",
        transition: "all 0.4s linear",
      }}
    >
      <div>
        {/* close button **** */}
        <div
          className="lg:hidden"
          onClick={() => dispatch(setIsSideBarOpen(!isOpen))}
        >
          <p className="text-end text-[1.8rem] font-semibold">X</p>
        </div>

        {/* user data details***** */}
        <div className="flex justify-between items-center bg-light-gray rounded-xl py-6 px-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#ed6700] rounded-full flex items-center justify-center text-white">
              <h2 className="text-[1rem] font-medium">Test</h2>
            </div>

            <div>
              <h3 className="text-[1.2rem] font-medium tracking-tighter">
                User Data
              </h3>
              <span className="text-[#7e7e7f] font-semibold">
                {users?.length} users
              </span>
            </div>
          </div>
        </div>

        {/* LINKS TO NAVIGATE***** */}
        <div className="mt-6 flex flex-col gap-6">
          {SideLinks.map((Data, Index) => {
            return (
              <Link
                key={Index}
                className={`text-[1.1rem] font-medium px-3 py-4 flex items-center gap-2 rounded-md hover:bg-[#393849fd] hover:text-white transition-all duration-200  ${
                  pathname == Data.Src
                    ? "bg-[#393849fd] text-white"
                    : "bg-[#eef1f8]"
                }`}
                href={Data.Src}
                onClick={() => dispatch(setIsSideBarOpen(!isOpen))}
              >
                {Data.Icon}
                {Data.LinkName}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
