"use client";

import UserCards from "@/components/Cards/UserCards";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hook";
import { getUserData } from "@/redux/slices/userSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { users } = useAppSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <main>
      <h2 className="text-center text-[2.4rem] text-slate-900 font-semibold bg-blue-100">
        All Users
      </h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 sm:gap-y-14 gap-y-5 gap-x-10 mt-12">
        {users?.map((data, Index) => (
          <UserCards Data={data} key={data.id} Index={Index} />
        ))}
      </div>
    </main>
  );
}
