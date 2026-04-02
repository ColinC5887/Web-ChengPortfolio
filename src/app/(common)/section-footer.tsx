import React from "react";
import Link from "next/link";

export default function CommonSectionFooter() {
  return (
    <div className="bg-slate-950 h-auto w-full py-3 flex flex-col justify-center items-center">
      <p className="text-center text-sm drop-shadow-dark">
        Copyright © 2022 - 2026 <Link href="/">Cheng Music</Link>
      </p>
    </div>
  );
}
