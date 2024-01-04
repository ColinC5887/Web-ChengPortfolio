import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  text: string;
  link: string;
}

const linkData: LinkItem[] = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "About",
    link: "/about",
  },
];

export default function CommonSectionHeader() {
  return (
    <div className="py-4 bg-slate-950 flex flex-row justify-center">
      <div className="max-w-screen-xl px-12 md:px-24 flex flex-row justify-center flex-1 items-center text-center">
        {linkData.map((item) => {
          return (
            <Link
              key={item.text}
              className="text-base text-xl mx-2 md:mx-4"
              href={item.link}
            >
              {item.text}
            </Link>
          );
        })}

        <span className="flex-1"></span>
        <a className="mx-8" href="https://soundcloud.com/colin-cheng-605923909">
          <Image
            src="/img/logoSoundcloud.png"
            alt="soundcloud"
            width={32}
            height={32}
          />
        </a>
      </div>
    </div>
  );
}
