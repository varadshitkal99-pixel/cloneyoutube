import { useState } from "react"; // needed to hold the sidebar's open/closed state
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/ui/header";
import Sidebar from "@/components/sidebar";
import VideoCard from "@/components/videoCard"; // ← ADD THIS LINE
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  // This is the "remote control" — the ONE shared piece of state that both
  // Header and Sidebar need access to. It lives here because index.tsx is
  // their common parent (the only place that can see both of them).
  // Starts as "true" so the sidebar is visible by default on page load.
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-50 font-sans dark:bg-black`}
    >
      {/* We pass Header a FUNCTION as a prop called onMenuClick.
          "(prev) => !prev" means "flip whatever the current value is" —
          true becomes false, false becomes true. Header will call this
          function whenever its hamburger icon is clicked. */}
      <Header onMenuClick={() => setIsSidebarOpen((prev) => !prev)} />

      <div className="flex">
        {/* We pass Sidebar the CURRENT value as a prop called isOpen.
            Sidebar reads this to decide whether to show itself at
            full width, or animate down to width 0. */}
        <Sidebar isOpen={isSidebarOpen} />

        <main className="flex-1 flex flex-col items-center py-16 px-8 bg-white dark:bg-black">
          <Image
            className="dark:invert h-5 w-[100px]"
            src="/next.svg"
            alt="Next.js logo"
            width={100}
            height={20}
            priority
          />
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left mt-8">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              To get started, edit the{" "}
              <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
                index.tsx
              </code>{" "}
              file.
            </h1>
          </div>

          <VideoCard
            id="42"
            thumbnail="https://picsum.photos/seed/1/640/360"
       duration="12:34"
             title="Learning Next.js and JSX for Your First Real Project"
  channelName="Code With You"
  channelAvatar="https://i.pravatar.cc/150?img=12"
  views="1.2M"
  uploadedAt="3 days ago"
/>

        </main>
      </div>
    </div>
  );
}