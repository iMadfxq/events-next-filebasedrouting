import { useRouter } from "next/router"

 function FilteredEvents() {
  const router = useRouter()

  const {slug} = router.query
  return <p>{slug}</p>
}

export default FilteredEvents