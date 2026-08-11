import Image from "next/image"
import Link from "next/link" // NEW: lets us make the whole card clickable/navigable

type VideoCardProps = {
  id: string; // NEW: every video needs a unique id, so we know which page to link to
  thumbnail: string;
  duration: string;
  title: string;
  channelName: string;
  channelAvatar: string;
  views: string;
  uploadedAt: string;
};

const VideoCard = ({
  id,
  thumbnail,
  duration,
  title,
  channelName,
  channelAvatar,
  views,
  uploadedAt,
}: VideoCardProps) => {
  return (
    // The Link wraps EVERYTHING — the whole card becomes one big clickable area.
    // href uses a "template string" (backticks) to build the URL dynamically,
    // inserting whatever "id" this specific card was given.
    <Link href={`/watch/${id}`} className="flex flex-col gap-2 cursor-pointer">

      <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
        <Image src={thumbnail} alt={title} fill className="object-cover" />
        <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
          {duration}
        </span>
      </div>

      <div className="flex gap-3">
        <Image
          src={channelAvatar}
          alt={channelName}
          width={36}
          height={36}
          className="rounded-full h-9 w-9 shrink-0"
        />
        <div className="flex flex-col">
          <h3 className="text-sm font-medium text-black line-clamp-2">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">{channelName}</p>
          <p className="text-xs text-gray-500">{views} views • {uploadedAt}</p>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard