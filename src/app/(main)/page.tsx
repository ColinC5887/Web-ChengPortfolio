import MainSectionLogo from "./pageSection-01-logo";
import MainSectionPost from "./pageSection-02-articles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <MainSectionLogo />
      <MainSectionPost />
    </main>
  );
}
