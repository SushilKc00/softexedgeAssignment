"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import React, { useEffect, useState } from "react";
import "./user.css";
import Link from "next/link";
import { getUserData } from "@/redux/slices/userSlice";
import { motion } from "framer-motion";
import { IUsersType } from "@/types/types";

function Users() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const [searchUser, setSearchUser] = useState<IUsersType[]>([]);
  const [isSearchUser, setIsSearchUser] = useState(false);

  const searchUserFunc = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const text: string = (e.target as HTMLInputElement).value;
    setIsSearchUser(true);

    if (text == "") {
      setIsSearchUser(false);
    }

    const filterUser = users.filter((user) =>
      user.name.toLowerCase().includes(text.toLowerCase())
    );

    if (filterUser) {
      setSearchUser([...filterUser]);
    }
  };

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <div className="users-container">
      <div className="flex items-center gap-3 justify-between search-and-filter-container">
        <input
          type="text"
          placeholder="search users....."
          className="outline-none border border-slate-500 rounded-md px-4 py-2 text-[1.5rem]"
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) =>
            searchUserFunc(e)
          }
        />
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {isSearchUser
              ? searchUser?.map((userDetails, Index) => (
                  <motion.tr
                    key={userDetails.id}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{ delay: Number(`0.${Index}`), duration: 0.3 }}
                  >
                    <td>{userDetails.name}</td>
                    <td>{userDetails.email}</td>
                    <td>{userDetails.phone}</td>
                    <td>{userDetails.website}</td>

                    <td>
                      <Link
                        href={`/userdetails/${userDetails.name}`}
                        className="common-btn"
                      >
                        view
                      </Link>
                    </td>
                  </motion.tr>
                ))
              : users?.map((userDetails, Index) => (
                  <motion.tr
                    key={userDetails.id}
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{
                      x: 0,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{ delay: Number(`0.${Index}`), duration: 0.3 }}
                  >
                    <td>{userDetails.name}</td>
                    <td>{userDetails.email}</td>
                    <td>{userDetails.phone}</td>
                    <td>{userDetails.website}</td>

                    <td>
                      <Link
                        href={`/userdetails/${userDetails.name}`}
                        className="common-btn"
                      >
                        view
                      </Link>
                    </td>
                  </motion.tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
