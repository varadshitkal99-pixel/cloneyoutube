import { useRouter } from "next/router"

const WatchPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className="p-8">
      <h1 className="text-xl font-bold">Watching video: {id}</h1>
    </div>
  )
}

export default WatchPage