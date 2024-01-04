import Image from "next/image";
import Link from "next/link";
import { AllPostData } from "../../postData/PostDataItem";
import Markdown from "react-markdown";
import "./page.css";
import remarkGfm from "remark-gfm";

export default function PagePost({ params }: { params: { index: string } }) {
  const postDataItem = AllPostData.find((item) => {
    return item.id === params.index;
  });

  if (!postDataItem) {
    return (
      <div className="flex min-h-screen flex-col items-center">
        {/* Title */}
        <h1 className="text-5xl font-bold mt-20">No Post Here</h1>

        {/* No Page Explanation */}
        <p className="text-xl font-bold mt-20 max-w-screen-xl px-12 md:px-24">
          It looks like you have landed on the wrong page. There are no posts
          here.
        </p>
        <p className="text-xl font-bold mt-4 max-w-screen-xl px-12 md:px-24">
          Please use the following link to return to the main page.
        </p>

        {/* Back To Main */}
        <Link
          className="text-base text-xl my-12 text-sky-300 border-b"
          href="/"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold mt-20">{postDataItem.title}</h1>
      <p className="text-xl text-slate-400 mt-2">{postDataItem.subtitle}</p>
      <p className="text-lg text-slate-500">{postDataItem.date}</p>

      {postDataItem.soundcloud && (
        <iframe
          width="100%"
          height="450"
          allow="autoplay"
          className="max-w-screen-md px-12 mt-20 mb-12"
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/${postDataItem.soundcloud}&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
        ></iframe>
      )}

      <Markdown
        remarkPlugins={[remarkGfm]}
        className="markdown max-w-screen-xl px-12 md:px-24"
      >
        {postDataItem.content}
      </Markdown>

      {/* Paragraph */}
      <Image
        className="mt-20 rounded-3xl"
        src={`/PostAlbum/${params.index}.jpg`}
        alt={postDataItem.title}
        width={512}
        height={512}
      />

      {/* Back To Main */}
      <Link
        className="text-base text-xl my-12 text-sky-300 border-b"
        href={"/#" + postDataItem.id}
      >
        Return Home
      </Link>
    </div>
  );
}
