import Link from "next/link";

export default function PageAbout() {
  const aboutArticle: string[] = [
    "Hello everyone! I'm Cheng, a dedicated music composer specializing in games. Music is not just a hobby to me, it's the pulse of the gaming universe. I've honed my skills by creating music for a variety of games, each piece tailored to enhance the gaming experience.",
    "I have a knack for tailoring music to fit different game environments. Whether it's the serene melodies of a peaceful village or the adrenaline-pumping beats of an epic battle, I pride myself on creating music that blends seamlessly into different game scenarios. My goal is to evoke emotion and deepen immersion through carefully crafted soundscapes.",
    "To me, music is a language of emotion and experience. Composing for games offers a unique opportunity to express and perceive the world through sound. Every note I create aims to transport the player into a world of emotion and deepen their connection to the game's narrative.",
    "Creating music for games isn't just a job; it's a passion that allows me to push boundaries. It's about creating memorable moments within the game world, building connections between players and the game experience. I strive to leave an indelible mark by creating memorable sonic landscapes.",
    "Thank you for exploring my world of game-inspired music. I hope these compositions resonate with you, elevating your gaming experience to new heights and infusing every moment with the power of music.",
    "Cheng",
  ];

  return (
    <div className="flex min-h-screen flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold my-20">About</h1>

      {/* Paragraph */}
      <div className="w-full max-w-screen-xl px-12 md:px-24">
        <div className="flex flex-col items-left">
          {aboutArticle.map((paragraph, index) => {
            return (
              <p key={index} className="text-xl my-4">
                {paragraph}
              </p>
            );
          })}
        </div>
      </div>

      <Link className="text-base text-xl my-12 text-sky-300 border-b" href="/">
        Return Home
      </Link>
    </div>
  );
}
