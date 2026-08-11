import Link from "next/link"
import { Home, Compass, PlaySquare, History, ThumbsUp, Clock, User } from "lucide-react"

// Split into TWO separate groups, so we can render a divider line between them
// (just like the reference image: Home/Explore/Subscriptions, then a line, then the rest)
const mainLinks = [
  { name: "Home", href: "/", icon: Home },
  { name: "Explore", href: "/explore", icon: Compass },
  { name: "Subscriptions", href: "/subscriptions", icon: PlaySquare },
]

const secondaryLinks = [
  { name: "History", href: "/history", icon: History },
  { name: "Liked videos", href: "/liked", icon: ThumbsUp },
  { name: "Watch later", href: "/watch-later", icon: Clock },
  { name: "Your channel", href: "/channel", icon: User },
]

type SidebarProps = {
  isOpen: boolean;
};

const Sidebar = ({ isOpen }: SidebarProps) => {
  return (
    <aside
      className={`shrink-0 border-r border-gray-200 bg-white h-[calc(100vh-56px)] overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "w-56 py-4" : "w-0 py-0"
      }`}
    >
      <nav className="flex flex-col w-56">

        {/* ---------- Group 1: main links ---------- */}
        <div className="flex flex-col gap-1 px-2 pb-3">
          {mainLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 px-3 py-2 rounded-lg text-sm text-black hover:bg-gray-100 whitespace-nowrap"
              >
                <Icon className="w-5 h-5 shrink-0" />
                {link.name}
              </Link>
            )
          })}
        </div>

        {/* Divider line between the two groups */}
        <hr className="border-gray-200 mx-2" />

        {/* ---------- Group 2: secondary links ---------- */}
        <div className="flex flex-col gap-1 px-2 pt-3">
          {secondaryLinks.map((link) => {
            const Icon = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 px-3 py-2 rounded-lg text-sm text-black hover:bg-gray-100 whitespace-nowrap"
              >
                <Icon className="w-5 h-5 shrink-0" />
                {link.name}
              </Link>
            )
          })}
        </div>

      </nav>
    </aside>
  )
}

export default Sidebar