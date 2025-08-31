import React from "react";
import Image from "next/image";
import { AllPostData } from "../postData/PostDataItem";
import Link from "next/link";

export default function MainSectionPost() {
  return (
    <div className="flex flex-col items-center h-auto w-full py-20">
      <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
        {[...AllPostData].slice(0, 16).map((item) => {
          return (
            <Link
              id={item.id}
              className="p-4 rounded-2xl hover:bg-slate-800 transition-colors-transform duration-500 ease-in-out transform hover:scale-110"
              key={item.id}
              href={`/post/${item.id}`}
            >
              {/* Album */}
              <div className="flex flex-col justify-center items-center h-[230px] mb-4">
                <Image
                  className="rounded-xl shadow-dark"
                  src={`/PostAlbum/${item.id}.jpg`}
                  alt={item.title}
                  width={230}
                  height={230}
                />
              </div>

              {/* Title and Date */}
              <div className="flex flex-col justify-center items-center">
                <p className="text-2xl lg:text-xl xl:text-2xl font-bold text-slate-200">
                  {item.title.length > 20
                    ? item.title.slice(0, 18) + "..."
                    : item.title}
                </p>
                <p className="text-md text-slate-400 mt-2">{item.date}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
