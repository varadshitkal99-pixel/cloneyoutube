import { useState } from "react"
import Link from "next/link"
import { Menu, Search } from "lucide-react" // icon components (pictures) we use below
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



// This describes the "shape" a real logged-in user object must have.
// Every user needs an id (number), a name, an email, and an image (all text/strings).
type User = {
  id: number;
  name: string;
  email: string;
  image: string;
};

// This describes what data (props) the Header component expects to RECEIVE
// from its parent (index.tsx). Here, it can optionally receive a function
// called onMenuClick, which takes no input and returns nothing (void).
type HeaderProps = {
  onMenuClick?: () => void; // the "?" means this prop is optional
};

// The actual Header component. We "unpack" onMenuClick from props here,
// so we can use it directly by name inside this function.
const Header = ({ onMenuClick }: HeaderProps) => {

  // Fake/placeholder user data for now. Later, this would come from real
  // login/auth data instead of being hardcoded. It's typed as "User | null"
  // meaning it's EITHER a full User object, OR null (logged out).
  const user: User | null = null;

  // React "state" — a value that can change over time and causes a
  // re-render whenever it updates. Starts as an empty string.
  // searchQuery = the current value, setSearchQuery = how we update it.
  const [searchQuery, setSearchQuery] = useState("");


  return (
    // Outer bar: horizontal row (flex), spaced out (justify-between),
    // white background, thin bottom border line.
    <header className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200 gap-4">

      {/* ---------- LEFT SECTION: menu icon + logo ---------- */}
      <div className="flex items-center gap-4 shrink-0">

        {/* Hamburger menu button. onClick={onMenuClick} means: when clicked,
            call whatever function the PARENT gave us (usually toggles the sidebar). */}
        <Button variant="ghost" size="icon" onClick={onMenuClick}>
          <Menu className="w-6 h-6 text-black" />
        </Button>

        {/* Clicking this Link takes you back to the homepage ("/") */}
        <Link href="/" className="flex items-center gap-1">
          <div className="bg-red-600 p-1 rounded">
            {/* Hand-drawn YouTube-style play button icon (raw SVG shape data) */}
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.121 2.136C4.495 20.455 12 20.455 12 20.455s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </div>
          <span className="text-xl font-medium text-black">YourTube</span>
          <span className="text-xs text-gray-400 ml-1">IN</span>
        </Link>
      </div>

      {/* ---------- MIDDLE SECTION: search bar ---------- */}
      {/* flex-1 = grow and fill all leftover space between left and right sections */}
      <div className="flex-1 flex justify-center max-w-2xl mx-auto">
        <div className="flex w-full">

          {/* Controlled input: its value is ALWAYS whatever searchQuery currently is.
              Every keystroke fires onChange, which updates searchQuery via setSearchQuery. */}
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="rounded-l-full rounded-r-none border-r-0 focus-visible:ring-0"
          />

          {/* Search button — rounded only on the right side, so together
              with the input above it looks like ONE pill-shaped search bar */}
          <Button
            variant="secondary"
            className="rounded-r-full rounded-l-none border border-l-0 px-6"
          >
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>


      {/* ---------- RIGHT SECTION: avatar OR sign-in button ---------- */}
      <div className="shrink-0">

        {/* Ternary (if/else shorthand): 
            IF user exists -> show the Avatar
            IF user is null -> show a "Sign In" button instead
            This prevents crashes from trying to read .image/.name on null */}
        {user ? (
          <Avatar>
            <AvatarImage src={user.image} alt={user.name} />
            {/* Shown only if the image fails to load — just the first letter of the name */}
            <AvatarFallback>
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
        ) : (
          <Button variant="default" className="rounded-full px-6">
            Sign In
          </Button>
        )}
      </div>

    </header>
  );
};

export default Header;