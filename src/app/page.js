import Image from "next/image";
import Head from "next/head"; // Import the Head component

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="public/favicon.png" type="image/png" /> {/* Update the favicon path */}
        <title>BlissfulPages</title> {/* Change the tab name */}
      </Head>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <h1 className="text-2xl font-bold text-center">Welcome to BlissfulPages</h1>
          <p className="text-center text-lg max-w-xl">
            This site will guide you through the prototyping process for BlissfulPages, a platform designed to create better, more custom, and inclusive wedding websites. Join us as we explore innovative features that empower couples to celebrate their unique love stories.
          </p>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} BlissfulPages. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
