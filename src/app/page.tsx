"use client";

import UserCards from "@/components/Cards/UserCards";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { getUserData } from "@/redux/slices/userSlice";
import { IUsersType } from "@/types/types";
import { useEffect, useState } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);
  const [filterUser, setfilterUser] = useState<IUsersType>();
  const [isFilterUser, setIsFilterUser] = useState(false);

  const selectUser = (user: IUsersType) => {
    setIsFilterUser(true);
    const filterUser = users.filter(
      (data) => data.name.toLocaleLowerCase() == user.name.toLocaleLowerCase()
    );
    setfilterUser({ ...filterUser, ...filterUser[0] });
  };

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <main>
      <h2 className="text-center text-[2.4rem] text-slate-900 font-semibold bg-blue-100">
        All Users
      </h2>
      <div className="flex sm:justify-center sm:gap-10 gap-4 mt-10 overflow-auto hide-scroll">
        {users.slice(0, 3).map((user) => (
          <button
            key={user.id}
            className="common-btn flex-none"
            onClick={() => selectUser(user)}
          >
            {user.name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-y-14 gap-y-5 gap-x-10 mt-16">
        {isFilterUser ? (
          <UserCards Data={filterUser!} Index={1} />
        ) : (
          users?.map((data, Index) => (
            <UserCards Data={data} key={data.id} Index={Index} />
          ))
        )}
      </div>
    </main>
  );
}
