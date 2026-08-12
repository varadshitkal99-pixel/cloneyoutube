import { useState } from "react"; // lets us hold the sidebar's open/closed state
import { Geist, Geist_Mono } from "next/font/google"; // custom fonts for the whole site

// Your own custom components, built earlier
import Header from "@/components/ui/header";
import Sidebar from "@/components/sidebar";
import VideoCard from "@/components/ui/videocard";

// Fake video data (array of objects), so we don't have to hand-write
// every single video card manually
import { videos } from "@/data/videos";

// Loading the two custom fonts, each stored under its own CSS variable name
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// This is your actual HOMEPAGE component — whatever this returns
// is what shows up at localhost:3000
export default function Home() {

  // The shared "remote control" state — lives here because this file
  // is the common parent of BOTH Header and Sidebar. Starts as true,
  // so the sidebar is open by default when the page first loads.
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    // Outermost wrapper: applies both fonts as CSS variables, sets a
    // minimum full-screen height, and light/dark background colors.
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-50 font-sans dark:bg-black`}
    >

      {/* Header sits at the very top, full width, above everything else.
          We hand it a function (onMenuClick) — Header doesn't need to know
          WHAT it does, just that clicking the menu icon should call it. */}
      <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />

      {/* This flex row holds Sidebar and the main content SIDE BY SIDE,
          underneath the Header */}
      <div className="flex">

        {/* Sidebar receives the CURRENT true/false value.
            It reads this itself to decide whether to show at full width
            or animate down to width 0 (see Sidebar.tsx for that logic). */}
        <Sidebar isOpen={isSidebarOpen} />

        {/* flex-1 = grow and take up all remaining horizontal space
            next to the sidebar. pt-2/pb-6 = small top gap, normal bottom gap. */}
        <main className="flex-1 flex flex-col pt-2 pb-6 px-8 bg-white dark:bg-black">

          {/* The video grid container.
              - grid-cols-1 (mobile) up to xl:grid-cols-4 (wide screens)
                = responsive column count, more columns as the screen widens
              - gap-6 = consistent spacing between every card */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* .map() loops over every video object in our fake "videos" array,
                creating one VideoCard per item.
                key={video.id} = required by React to track each item efficiently.
                {...video} = "spread" shorthand: automatically passes EVERY
                property from this video object (thumbnail, title, views, etc.)
                as individual props, instead of writing them out one by one. */}
            {videos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}

          </div>
        </main>
      </div>
    </div>
  );
}