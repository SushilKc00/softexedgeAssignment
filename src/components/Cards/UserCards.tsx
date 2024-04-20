import { IUsersType } from "@/types/types";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

function UserCards({ Data, Index }: { Data: IUsersType; Index: number }) {
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
      transition={{ delay: Number(`0.${Index + 1}`), duration: 0.3 }}
      className="flex flex-col gap-2 shadow-md rounded-lg px-4 py-3 min-h-[200px] bg-gray-50 hover:scale-125 hover:bg-gray-200 hover:duration-300"
    >
      {/* User Name ***** */}
      <h2 className="text-[2rem] font-medium text-slate-700">
        Name: {Data.name}
      </h2>

      {/* User Email**** */}
      <Link
        href={"/"}
        className="text-primary-dark-blue-violet text-[1.5rem] font-normal"
      >
        Email: {Data.email}
      </Link>

      {/* User Phone****** */}
      <Link
        href={"/"}
        className="text-primary-dark-blue-violet text-[1.5rem] font-normal"
      >
        Phone: {Data.phone}
      </Link>

      {/* UserWebsite Link**** */}
      <Link
        href={Data.website}
        className="text-primary-dark-blue-violet text-[1.5rem] font-normal"
      >
        Website: {Data.website}
      </Link>

      <div className="mt-8">
        <Link
          href={`userdetails/${Data.name}`}
          className="common-btn inline-block"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
}

export default UserCards;
