import React from "react";
import Image from "next/image";

export default function MainSectionLogo() {
  return (
    <div className="relative h-[800px] w-full select-none">
      {/* Background */}
      <Image
        className="absolute inset-0 w-full h-full"
        src="/img/banner-main.jpg"
        alt="Cheng Logo"
        fill={true}
        priority={true}
      />
      {/* Video */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <video
          className="max-w-xs md:max-w-lg"
          src="/path/to/video.mp4"
          autoPlay
          loop
          muted
        />
      </div>
      {/* Logo */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
        <Image src="/img/logo.png" alt="Cheng Logo" width={512} height={512} />
        <p className="text-6xl font-bold drop-shadow-dark mx-12 -mt-2">
          Cheng Music
        </p>
      </div>

      {/* Trans */}
      <div className="absolute top-0 w-full h-12 bg-gradient-to-t from-transparent to-slate-950"></div>
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-slate-900 to-transparent"></div>
    </div>
  );
}
