"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import Link from "next/link";
import { getSingleUserDetails, getUserData } from "@/redux/slices/userSlice";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";

function UserDetails() {
  const params = useParams();

  const dispatch = useAppDispatch();
  const { users, singleUserDetail } = useAppSelector((state) => state.users);
  const [open, setIsopen] = useState(false);
  const [id, setId] = useState<number>();

  const userDetails = users.filter(
    (user) => user.name == decodeURIComponent(params.name as string)
  );

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="w-full"
    >
      <div className="shadow-lg max-w-[800px] mx-auto px-8 py-6 bg-gray-100 mt-20">
        <Link href={"/"} className="flex justify-end">
          <IoClose size={20} />
        </Link>
        <h2 className="text-center text-[2rem] uppercase font-medium">
          User Details
        </h2>
        <div className="flex flex-col gap-2 mt-6">
          <h3 className="text-[2rem] font-medium text-slate-700">
            Name: {userDetails[0]?.name}
          </h3>

          {/* User Email ***** */}

          <div className="flex justify-between">
            <Link
              href={userDetails[0]?.website ? userDetails[0]?.website : ""}
              className="text-primary-dark-blue-violet text-[1.5rem] font-normal bg-gray-200"
            >
              Email: {userDetails[0]?.email}
            </Link>
          </div>

          {/* User Phone****** */}
          <Link
            href={userDetails[0]?.website ? userDetails[0]?.website : ""}
            className="text-primary-dark-blue-violet text-[1.5rem] font-normal "
          >
            Phone: {userDetails[0]?.phone}
          </Link>

          {/* UserWebsite Link**** */}
          <div className="text-primary-dark-blue-violet text-[1.5rem] font-normal bg-gray-200 flex justify-between items-start px-2">
            <div>
              <Link
                href={userDetails[0]?.website ? userDetails[0]?.website : ""}
              >
                Website: {userDetails[0]?.website}
              </Link>
              <div
                className=""
                style={{
                  display: open && id == userDetails[0].id ? "block" : "none",
                  // height: "0",
                  // overflow: "hidden",
                }}
              >
                <p>{userDetails[0]?.website}</p>
              </div>
            </div>

            <div
              style={{
                rotate: open ? "180deg" : "0deg",
              }}
            >
              <FaAngleDown
                size={15}
                onClick={() => {
                  setIsopen(!open);
                  setId(userDetails[0]?.id);
                }}
              />
            </div>
          </div>

          <div>
            <p className="text-primary-dark-blue-violet text-[1.5rem] font-normal">
              Address: {userDetails[0]?.address?.city}
            </p>
          </div>
          <div>
            <p className="text-primary-dark-blue-violet text-[1.5rem] font-normal bg-gray-200">
              Company: {userDetails[0]?.company?.name}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default UserDetails;
