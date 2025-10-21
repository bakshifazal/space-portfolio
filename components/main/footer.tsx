import Link from "next/link";

import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-4 sm:p-6 md:p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-start justify-around flex-wrap gap-6 sm:gap-4">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center sm:items-start justify-start"
            >
              <h3 className="font-bold text-base sm:text-[16px] mb-2">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-2 sm:my-[15px] hover:text-purple-500 transition"
                >
                  {Icon && <Icon className="text-lg" />}
                  <span className="text-sm sm:text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mb-[20px] text-sm sm:text-[15px] text-center mt-8 px-4">
          &copy; Fazal Bakshi {new Date().getFullYear()} Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};
